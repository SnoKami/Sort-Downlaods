/**
 * @name EnvInfo
 * @description Evironment Information
 * @author MokiyCodes
 * @license MIT
 */
export const EnvInfo =
`- Node -> ${process.versions.node}
  => name: ${process.release.name}
  => lts: ${process.release.lts}
  => sourceUrl: ${process.release.sourceUrl}
  => headersUrl: ${process.release.headersUrl}
  => libUrl: ${process.release.libUrl}
- V8 -> ${process.versions.v8}
- OS -> ${process.platform}
- Arch -> ${process.arch}
- PID -> ${process.pid}
- Title -> ${process.title}
- CWD -> ${process.cwd()}`;
/**
 * @name Indent
 * @description Returns the indented version of EnvInfo
 * @see EnvInfo
 * @author MokiyCodes
 * @license MIT
 * @param amount How much to indent it by
 * @returns {string} Indented String
 */
export const Indent = (amount:number): string =>`${' '.repeat(amount)}${EnvInfo.split('\n').join(`\n${' '.repeat(amount)}`)}`;
/**
 * @name EnvInfo
 * @description Evironment Information
 * @author MokiyCodes
 * @license MIT
 */
export default {
  /**
   * @name EnvInfo
   * @description Evironment Information
   * @author MokiyCodes
   * @license MIT
   */
  EnvInfo,
  /**
   * @name Indent
   * @description Returns the indented version of EnvInfo
   * @see EnvInfo
   * @author MokiyCodes
   * @license MIT
   * @param amount How much to indent it by
   * @returns {string} Indented String
   */
  Indent,
  'toString': ()=>EnvInfo,
};
