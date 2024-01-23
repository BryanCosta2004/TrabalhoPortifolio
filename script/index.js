const elemProjects = document.getElementById('project__content')

const loadProjects = (projects) => {
    projects.forEach(project => {
        const elemPicture = document.createElement('picture')
        const elemImg = document.createElement('img')

        elemImg.setAttribute('src', project.image)

        elemPicture.appendChild(elemImg)

        return elemPicture

        elemProjects.setAttribute('href', project.link)
        elemProjects.setAttribute('target', '_blank')


        elemProjects.classList.add('project')

        elemImg.setAttribute('src', project.image)

        elemPicture.appendChild(elemImg)
        elemProject.appendChild(elemPicture)

        const elemStrong = document.createElement('strong')
        elemStrong.innerText = project.name

        elemProjects.appendChild(elemStrong)

        const elemTags = document.createAttribute('div')
        project.tags.forEach(tag => {
            const elemTag = document.createElement('span')
            elemTag.innerText = tag

            elemTags.appendChild(elemTag)
        });
        
        elemProject.appendChild(elemTags)

        elemProjects.appendChild(elemProject)
    });

}


fetch('projects.json').then(Response => Response.json().then(loadProjects))