let issues = [];
let id = 0;

function showIssues(){
    let elIssuesList = document.getElementById('issuesList');
    elIssuesList.innerHTML = '';
    let el = document.createElement('div');
    el.innerHTML = '';
    if(issues.length == 0){
        elIssuesList.style.display = 'none';
    }else{
        elIssuesList.style.display = 'block';
    for(let issue of issues){
        let backgrColor = '';
        if(issue.status == 'Closed'){
            backgrColor = ' style="background-color:orange"';
        }
        el.innerHTML += '<div class="issue">'+
        '<h5>Issue ID: ' + issue.issueId + '</h5>'+
        '<p><span id="statusSpan"' + backgrColor + '>' + issue.status + '</span></p>'+
        '<i style="float:right;" class="material-icons" onclick="deleteIssue(' + issue.issueId + ')" >clear</i>' +
        '<i style="float:right;" class="material-icons" onclick="closeIssue(' + issue.issueId + ')">https</i>' +
        '<h2>' + issue.desc + '</h2>'+
        '<p><span><i class="material-icons">person</i><span>' + issue.assign + '</span></p>'+
        '<p><i class="material-icons">schedule</i><span>' + issue.sev + '</span></p>'+
        '<hr>' +
        '</div>';
    }
        document.getElementById('issuesList').appendChild(el);
}
    
}

function onSubmit(){
    let issueDesc = document.getElementById('desc');
    let assigned = document.getElementById('assign');
    let severity = document.getElementById('options');
    let errorTag = document.getElementsByTagName('p')[0];

    if(issueDesc.value == '' || assigned.value == ''){
        errorTag.style.display = 'block';
        return;
    }else{
        errorTag.style.display = 'none';
    }
    
    let issue = {
        desc: issueDesc.value,
        assign: assigned.value,
        sev: severity.value,
        status: 'Open',
        issueId: id
    }
    //creating an element
    issues.push(issue);
    id++;
    issueDesc.value = '';
    assigned.value = '';
    severity.value = 'Low';
    showIssues();
}


function deleteIssue(id){
    for(let i = 0;i < issues.length;i++){
        if(id == issues[i].issueId){
            issues.splice(i,1);
            break;
        }
    }

    showIssues();
}

function closeIssue(id){
    
    for(let i = 0;i < issues.length;i++){
        if(id == issues[i].issueId){
            issues[i].status = 'Closed';
            break;
        }
    }
    
    showIssues();
}