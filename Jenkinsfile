pipeline {
	agent any

	tools {
		nodejs "NodeJS 24"
	}

	stages {
		stage("Install Dependencies") {
			steps {
				sh "npm install"
			}
		}

		stage("Build") {
			steps {
				sh "npm run build"
			}
		}

		stage("Test") {
			steps {
				sh "npm test"
			}
		}
	}

}