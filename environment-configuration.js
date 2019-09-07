(() => {
  var colors = require('colors/safe');
  var dotenv = require('dotenv');

  class EnviromentConfiguration {
    constructor() {

    }

    static configureFromCommandArguments(){
      const argv = require('yargs').argv
      const environment = process.env.npm_config_server || argv.server
      this.configure(environment);
    }

    static configure(envName) {
      const envPath = envName ? `./.env.${envName}` : null;
      console.log(colors.yellow('using: '),envPath);
      dotenv.config({
        path: envPath
	  });
	  dotenv.config({
        path: './.env.common'
      });
    
    }
  }

  exports.enviromentConfiguration = EnviromentConfiguration;
})()
