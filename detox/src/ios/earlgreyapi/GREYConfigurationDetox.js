/**

	This code is generated.
	For more information see generation/README.md.
*/


const log = require('../../utils/logger').child({ __filename });

class GREYConfiguration {
  static enableSynchronization(element) {
    return {
      target: element,
      method: "enableSynchronization",
      args: []
    };
  }

  static disableSynchronization(element) {
    return {
      target: element,
      method: "disableSynchronization",
      args: []
    };
  }

}

module.exports = GREYConfiguration;