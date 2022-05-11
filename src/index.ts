#!/usr/bin/env node
import chalk from 'chalk';
import EnvInfo from './envinfo';
import * as fs from 'fs-extra';
import * as path from 'path';
import stripAnsi from 'strip-ansi';
import packagejson from '../package.json';
import UpdateNotifier from 'update-notifier';
import SortList from './sortBy';
import RenameList from './renameList';

(async(LogFile)=>{
  try {
    // Updates
    const Notifier = UpdateNotifier({
      'pkg': packagejson, 'shouldNotifyInNpmScript': true, 'updateCheckInterval': 1000 * 60 * 60, 'distTag': 'latest'
    });
    Notifier.notify({
      'isGlobal': true,
      'message': `Update available ${chalk.dim('{currentVersion}')}${chalk.reset(' → ')}${chalk.green('{latestVersion}')} \nRun ${chalk.cyan(`pnpm i -g ${packagejson.name}`)} to update`,
    });
  } catch (error) {
    console.warn('// WARN: Update Check failed', error);
  }

  // Better Log
  const rawLog = console.log;
  console.log = (...a: string[])=>{
    rawLog(...a);
    fs.appendFileSync(LogFile, `${stripAnsi(a.join(' ')) /* Usually you'd want to use comments here, but this file exclusively logs in comment-alike logs */}\nconsole.log(\`${a.join(' ').replace(/\\/gi, '\\\\')
      .replace(/`/gi, '\\`')
      .replace(/(\r\n|\r|\n)/gi, '\\n')}\`);\n`);
  };
  fs.writeFileSync(LogFile, `// Run this in VM2 - https://npm.im/vm2\nconsole.log(\`[31mThis is a log file from ${new Date} running using ${packagejson.version}[39m\`);\n`);
  const comment = chalk.rgb(200, 200, 200);

  // Welcome Message
  process.title = 'Sort Downloads';
  console.log(comment(`
/**
 * @name Sort Downloads
 * @description A CLI tool to sort your downloads by file extension.
 * @url https://github.com/SnoKami/Sort-Downlaods/
 * @author SnoKami
 * @coauthor MokiyCodes
 * @version ${packagejson.version}
 * @license MIT
 */
/*
  Environment Informtion:
${EnvInfo.Indent(2)}
*/`.replace('\n', '')));

  interface StepInformation {
    'start': string, 'finish'?: string, 'error'?: boolean
  }

  const step: (((start_or_stepInformation: string | StepInformation, finish?: string, error?: boolean) => string)) = (a:StepInformation|string, b?:string, c?: boolean)=>{
    if (typeof a === 'string')
      return step({
        'start': a, 'finish': b, 'error': c
      });
    const {
      start, finish, error
    } = a;
    if (finish)
      console.log(comment(`// ${chalk.bgRgb(error ? 255 : 122, error ? 122 : 255, 122).rgb(0, 0, 0)(error ? ' ERR ' : ' SUCCESS ')} ${finish}`));
    if (error) {
      console.log(comment(`// ${chalk.bgRgb(255, 122, 122).rgb(0, 0, 0)(' ERR ')} Exiting due to error.`));
      return process.exit(1) ? '' : '';
    }
    if (start.length > 0)
      console.log(comment(`// ${chalk.bgRgb(122, 122, 255).rgb(0, 0, 0)(' START ')} ${start}`));
    return start;
  };

  ///////////////////////////////////////////

  step('Find Downloads Folder');
  const HOME = process.env.HOME ?? process.env.Home ?? process.env.UserProfile;
  const Dir = process.argv.includes('c') ? process.cwd() : path.resolve(HOME, 'Downloads');
  if (Dir && !fs.existsSync(Dir)) {
    step('Downloads Folder Not Found', Dir, true);
    return process.exit(1);
  }
  step('Prepare File Lists', `Found Downloads Folder ${Dir ? `(${Dir})` : '(No dir found - pass c to use the current dir)'}`, !Dir);
  if (!Dir)
    return process.exit(1);
  const AllFiles = fs.readdirSync(Dir);
  step('Prepare Downloads Sorter', 'Prepared File Lists');
  const Lists: Record<string, string[]> = {};
  for (const k in SortList)
    if (Object.prototype.hasOwnProperty.call(SortList, k)) {
      const v = SortList[k];
      let has = false;
      const list = [];
      // don't know of a better algorithm to do this
      for (const ending of v)
        for (const file of AllFiles)
          if (file.endsWith(ending)){
            has = true;
            list.push(path.resolve(Dir, file));
          }
      if (has) {
        fs.ensureDirSync(path.resolve(Dir, k));
        Lists[path.resolve(Dir, k)] = list;
        step('', `Prepared List ${k} (${v.length} entries)`);
      }
    }
  step('Sorting Downloads', 'Prepared File Lists');
  for (const Directory in Lists){
    const Files = Lists[Directory];
    step(`Moving ${Files.length} files to ${Directory}`);
    for (const File of Files) {
      let baseName = path.basename(File);
      for (const reg of RenameList)
        if (reg.test(baseName))
          baseName = `${Math.floor((new Date).getTime() / 1000)}-${baseName}`;
      fs.moveSync(File, path.resolve(Directory, baseName));
    }
    step('', `Moved ${Files.length} files to ${Directory}`);
  }
  step('', 'Sorted Downloads');
})(path.join(process.cwd(), 'sort-log.js'));
