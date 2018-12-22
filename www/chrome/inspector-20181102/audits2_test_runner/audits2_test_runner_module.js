Audits2TestRunner._panel=function(){return(UI.panels).audits2;};Audits2TestRunner.getContainerElement=function(){return Audits2TestRunner._panel().contentElement;};Audits2TestRunner.getResultsElement=function(){return Audits2TestRunner._panel()._auditResultsElement;};Audits2TestRunner.getDialogElement=function(){return Audits2TestRunner._panel()._statusView._dialog.contentElement.shadowRoot.querySelector('.audits2-view');};Audits2TestRunner.getRunButton=function(){const dialog=Audits2TestRunner.getContainerElement();return dialog&&dialog.querySelectorAll('button')[0];};Audits2TestRunner.getCancelButton=function(){const dialog=Audits2TestRunner.getDialogElement();return dialog&&dialog.querySelectorAll('button')[0];};Audits2TestRunner.openStartAudit=function(){Audits2TestRunner._panel()._renderStartView();};Audits2TestRunner.addStatusListener=function(onMessage){TestRunner.addSniffer(Audits2.StatusView.prototype,'updateStatus',onMessage,true);};Audits2TestRunner.waitForResults=function(){return new Promise(resolve=>{TestRunner.addSniffer(Audits2.Audits2Panel.prototype,'_buildReportUI',resolve);});};Audits2TestRunner.forcePageAuditabilityCheck=function(){Audits2TestRunner._panel()._controller.recomputePageAuditability();};Audits2TestRunner._checkboxStateLabel=function(checkboxContainer){if(!checkboxContainer)
return'missing';const label=checkboxContainer.textElement.textContent;const checkedLabel=checkboxContainer.checkboxElement.checked?'x':' ';return`[${checkedLabel}] ${label}`;};Audits2TestRunner._buttonStateLabel=function(button){if(!button)
return'missing';const enabledLabel=button.disabled?'disabled':'enabled';const hiddenLabel=window.getComputedStyle(button).getPropertyValue('visibility');return`${button.textContent}: ${enabledLabel} ${hiddenLabel}`;};Audits2TestRunner.dumpStartAuditState=function(){TestRunner.addResult('\n========== Audits2 Start Audit State ==========');const containerElement=Audits2TestRunner.getContainerElement();const checkboxes=[...containerElement.querySelectorAll('.checkbox')];checkboxes.forEach(element=>{TestRunner.addResult(Audits2TestRunner._checkboxStateLabel(element));});const helpText=containerElement.querySelector('.audits2-help-text');if(!helpText.classList.contains('hidden'))
TestRunner.addResult(`Help text: ${helpText.textContent}`);TestRunner.addResult(Audits2TestRunner._buttonStateLabel(Audits2TestRunner.getRunButton()));};;