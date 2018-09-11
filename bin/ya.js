#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const { log } = require('../utils/log');
const normalizeOpts = require('../utils/cli-args');

program
  .version(require('../package').version)
  .usage('<command> [options]');

program
  .command('create <project-name>')
  .description('create a new project powered by ya-driver.')
  .action((projectName, cmd) => {
    const options = normalizeOpts(projectName, cmd);
    require('../lib/create')(options);
  });

program
  .command('serve [project-name]')
  .description('serve project in development mode with zero config.')
  .action((projectName, cmd) => {
    const options = normalizeOpts(projectName, cmd);
    require('../lib/serve')(options);
  });

program
  .command('build [project-name]')
  .description('build project in production mode with zero config')
  .option('-K, --sdk', 'Output the sdk version') // 输出sdk版本
  .option('-D, --app-domain', 'The serve app dmain')
  .action((projectName, cmd) => {
    const options = normalizeOpts(projectName, cmd);
    require('../lib/build')(options);
  });

// add some useful info on help
program.on('--help', () => {
  log();
  log(`  Run ${chalk.cyanBright(`ya <command> --help`)} for detailed usage of given command.`);
  log();
});

program.parse(process.argv);
