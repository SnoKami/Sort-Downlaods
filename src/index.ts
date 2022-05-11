#!/usr/bin/env node
import packagefile from '../package.json';
import EnvInfo from './envinfo';
import * as fs from 'fs';
import * as path from 'path';
import { ChalkInstance } from 'chalk';
import stripAnsi from 'strip-ansi';
import packagejson from '../package.json';
import * as updateNotifier from 'update-notifier';

const SkipUpdateCheck = true;

const updater = updateNotifier({ 'pkg': packagejson, });
updater.notify();

(async(LogFile)=>{
  // Better Log
  const rawLog = console.log;
  console.log = (...a: string[])=>{
    rawLog(...a);
    fs.appendFileSync(LogFile, `${stripAnsi(a.join(' ')) /* Usually you'd want to use comments here, but this file exclusively logs in comment-alike logs */}\nconsole.log(\`${a.join(' ').replace(/\\/gi, '\\\\')
      .replace(/`/gi, '\\`')
      .replace(/(\r\n|\r|\n)/gi, '\\n')}\`);\n`);
  };
  fs.writeFileSync(LogFile, `// Run this in VM2 - https://npm.im/vm2\nconsole.log(\`[31mThis is a log file from ${new Date}[39m\`);\n`);
  // Imports
  // eslint-disable-next-line no-eval
  const chalk: ChalkInstance = (await eval(`import('chalk')`)).default;

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
 * @version ${packagefile.version}
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
  step('Prepare File Renamer', `Found Downloads Folder ${Dir ? `(${Dir})` : '(No dir found - pass c to use the current dir)'}`, !Dir);
  if (!Dir)
    return process.exit(1);
  const AllFiles = fs.readdirSync(Dir);
  step('Prepare Downloads Sorter', 'Prepared File Renamer');
})(path.join(process.cwd(), 'sort-log.js'));
