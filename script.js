function revealOnClick(){
    services.style.display = "block"
}

function hideOthers(service){
    if (service == "project"){
        interior.style.visibility = "hidden"
        realization.style.visibility = "hidden"
    }
    if (service == "interior"){
        project.style.visibility = "hidden"
        realization.style.visibility = "hidden"
    }
    if (service == "realization"){
        project.style.visibility = "hidden"
        interior.style.visibility = "hidden"
    }
}

function showOthers(service){
    if (service == "project"){
        interior.style.visibility = "visible"
        realization.style.visibility = "visible"
    }
    if (service == "interior"){
        project.style.visibility = "visible"
        realization.style.visibility = "visible"
    }
    if (service == "realization"){
        project.style.visibility = "visible"
        interior.style.visibility = "visible"
    }
}

