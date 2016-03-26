/**
 * npm-spof-test - Testing out npm's single point of failure issue
 *
 * Author: Resi Respati <resir014@github.io>
 * License: WTFPL
 */

/**
 * Export the module.
 */
var spof = module.exports = {}

/**
 * Prints an arbitrary "hello, world!" message into the console.
 */
spof.print = function () {
  console.log('Goodbye, Node!')
}
