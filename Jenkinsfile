pipeline {
	agent any

	tools {
		nodejs "Node JS"
	}

	stages {
		stage("Install Dependencies") {
			steps {
				sh "npm install"
			}
		}

		stage("Test") {
			steps {
				sh "npm test"
			}
		}
	}

}