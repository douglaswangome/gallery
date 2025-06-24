pipeline {
	agent any

	tools {
		nodejs "Node JS"
	}

	environment {
		RENDER_SERVICE_ID = "srv-d1cm5h7fte5s738052jg"
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

		stage("Deploy to Render") {
			steps {
				withCredentials([string(credentialsId: "MoringaDevOps10-IP1-Render", variable: 'RENDER_API_KEY')]) {
					sh """
	          curl -X POST https://api.render.com/v1/services/${RENDER_SERVICE_ID}/deploys \
	          -H "Accept: application/json" \
	          -H "Content-Type: application/json" \
	          -H "Authorization: Bearer ${RENDER_API_KEY}"
          """
			}
		}
	}

	post {
		always {
			script {
				def slackMessageColor
        def slackMessageText

        if (currentBuild.result == 'SUCCESS') {
        	slackMessageColor = '#36a64f' // Green
        	slackMessageText = "Build succeeded: <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>. Deployed to <${RENDER_BASE_URL}|Render Gallery>"
        } else {
        	slackMessageColor = '#ff0000' // Red
        	slackMessageText = "Build failed: <${env.BUILD_URL}|${env.JOB_NAME} #${env.BUILD_NUMBER}>"
        }

        slackSend(color: slackMessageColor, message: slackMessageText)
			}
		}
	}

}