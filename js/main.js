const phrases = [
    { verb: "Create", rest: "WebSystems();" },
    { verb: "Integrate", rest: "PaymentSolutions();" },
    { verb: "Develop", rest: "AzureCloudApplications();" },
    { verb: "Optimize", rest: "DatabasePerformance();" },
    { verb: "Implement", rest: "MicroservicesArchitecture();" },
    { verb: "Design", rest: "ScalableSystemsWithAzure();" },
    { verb: "Automate", rest: "DeploymentPipelines();" },
    { verb: "Manage", rest: "AzureServiceBus();" },
    { verb: "Architect", rest: "DistributedSystems();" },
    { verb: "Secure", rest: "CloudInfrastructure();" },
    { verb: "Analyze", rest: "SystemRequirements();" },
    { verb: "Lead", rest: "DevelopmentTeams();" },
    { verb: "Troubleshoot", rest: "ComplexTechnicalIssues();" },
    { verb: "Optimize", rest: "CodePerformance();" },
    { verb: "Implement", rest: "CICDPipelines();" }
];

let currentPhraseIndex = 0;
let isErasing = false;
let textIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let pauseBetweenPhrases = 1000;

function animateText() {
    const textElement = document.getElementById('animatedText');
    const currentPhrase = phrases[currentPhraseIndex];

    if (!isErasing && textIndex <= currentPhrase.verb.length + currentPhrase.rest.length) {
        if (textIndex <= currentPhrase.verb.length) {
            textElement.innerHTML = `<span class="verb">${currentPhrase.verb.substring(0, textIndex)}</span>`;
        } else {
            textElement.innerHTML = `<span class="verb">${currentPhrase.verb}</span><span class="rest">${currentPhrase.rest.substring(0, textIndex - currentPhrase.verb.length)}</span>`;
        }
        textIndex++;
        setTimeout(animateText, typingSpeed);
    } else if (isErasing && textIndex >= 0) {
        if (textIndex > currentPhrase.verb.length) {
            textElement.innerHTML = `<span class="verb">${currentPhrase.verb}</span><span class="rest">${currentPhrase.rest.substring(0, textIndex - currentPhrase.verb.length)}</span>`;
        } else {
            textElement.innerHTML = `<span class="verb">${currentPhrase.verb.substring(0, textIndex)}</span>`;
        }
        textIndex--;
        setTimeout(animateText, erasingSpeed);
    } else {
        isErasing = !isErasing;
        if (!isErasing) {
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        }
        setTimeout(animateText, pauseBetweenPhrases);
    }
}

// Start the animation when the page loads
window.addEventListener('load', animateText);