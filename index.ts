import * as path from 'path'
import { Installer } from '@blitzjs/installer'

enum Steps {
  addDockerfile
}

export default new Installer({
  packageName: "blitz-docker",
  packageDescription: "This installer adds a dockerfile to conatinerize your Blitz application",
  packageRepoLink: "TODO",
  packageOwner: "dajinchu@gmail.com"
}, [
  {
    stepId: Steps.addDockerfile,
    stepName: "Add dockerfile",
    explanation: "Add the dockerfile",
    templatePath: path.join(__dirname, "templates"),
    targetDirectory: ".",
    templateValues: {}
  }
])