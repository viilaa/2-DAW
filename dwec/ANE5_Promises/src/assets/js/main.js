document.addEventListener(('DOMContentLoaded'), () => {
    function boxStyle(param) {
        param.position = 'absolute';
        param.style.backgroundColor = 'rgb(127, 156, 238)';
        param.style.borderRadius = '5px';
        param.style.marginLeft = '500px';
        param.style.height = '300px';
        param.style.width = '350px';
    }

    function p1Style(param) {
        param.style.fontFamily = 'Arial';
        param.style.fontSize = '16px';
        param.style.lineHeight = '0.5em';
        param.style.color = 'blue';
        param.style.marginLeft = '5px';
    }

    function p2Style(param) {
        param.style.marginTop = '15px';
        param.style.fontFamily = 'Arial';
        param.style.fontSize = '16px';
        param.style.color = 'black';
        param.style.marginLeft = '5px';
    }
    const jobPromise = axios.get('https://jsonplaceholder.typicode.com/users');

    jobPromise.then((response) => {
        response.data.forEach(name => {

            let box = document.createElement('div');
            boxStyle(box);
            document.body.appendChild(box);
            box.id = 'Usuarios';
            box.style.display = 'block';

            let p1 = document.createElement('p');
            p1Style(p1);
            p1.textContent = JSON.stringify(name.name).replace(/['"]+/g, '')
            let p2 = document.createElement('p');
            p2Style(p2);
            p2.textContent = 'Nombre:';

            p2.appendChild(p1);
            box.appendChild(p2);


            let p3 = document.createElement('p');
            p1Style(p3);
            p3.textContent = JSON.stringify(name.username).replace(/['"]+/g, '')
            let p4 = document.createElement('p');
            p2Style(p4);
            p4.textContent = 'Usuario:';

            p4.appendChild(p3);
            box.appendChild(p4);

            let p5 = document.createElement('p');
            p1Style(p5);

            p5.textContent = JSON.stringify(name.email).replace(/['"]+/g, '')
            let p6 = document.createElement('p');
            p2Style(p6);
            p6.textContent = 'Email:';

            p6.appendChild(p5);
            box.appendChild(p6);

            let p7 = document.createElement('p');
            p1Style(p7);

            p7.textContent = JSON.stringify(name.website).replace(/['"]+/g, '')
            let p8 = document.createElement('p');
            p2Style(p8);
            p8.textContent = 'WEB';

            p8.appendChild(p7);
            box.appendChild(p8);

            const button = document.createElement('button');
            button.style.position = 'relative';
            button.style.padding = '5px 15px';
            button.style.borderRadius = '5px';
            button.textContent = 'Reset';
            button.style.marginLeft = '5px';
            button.style.backgroundColor = ' rgb(166, 210, 240)';
            box.appendChild(button);
            button.addEventListener('click', () => {
                p2.removeChild(p1);
                p4.removeChild(p3);
                p6.removeChild(p5);
                p8.removeChild(p7);
            });
        });
    });
});