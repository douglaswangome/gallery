pipeline {
	agent any

	tools {
		nodejs "Node JS"
	}

	environment {
		RENDER_BASE_URL = "https://gallery-45sh.onrender.com/"
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

	post {
		always {
			def slackMessageColor
			def slackMessageText

			if (currentBuild.result == 'SUCCESS') {
				slackMessageColor = '#36a64f' // Green
				slackMessageText = "Build succeeded: <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>. Deployed to <${RENDER_BASE_URL}|Render Gallery>"
			} else {
				slackMessageColor = '#ff0000' // Red
				slackMessageText = "Build failed: <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>"
			}
		}
	}

}