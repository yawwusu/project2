document.addEventListener('DOMContentLoaded', () => {

    const form = document.querySelector('#form')
    form.onsubmit = () => {
      alert("yaw")
      // if (!localStorage.getItem('name')) {
      //     console.log("here")
      //     const name = document.querySelector('#dname').value;
      //     localStorage.setItem('name',name);
      //     alert('Name registered')
      // }
      // else {
      //     alert('Name already registered');
      // }
      //
      // const data = new FormData();
      // data.append('name', name);
      //
      // // Send request.
      // request.send(data);
      return false;
    }


//     document.querySelector('#channel').onsubmit = (channels) => {
//
//         // Initialize new request
//         const request = new XMLHttpRequest();
//         const name = document.querySelector('#cname').value;
//         let flag = false;
//         for (i=0;i<channels.length,i++) {
//             if (name == channels[i]) {
//                 flag = true;
//             }
//         }
//         if (flag) {
//           alert('Channel already exists')
//         }
//         else {
//           request.open('POST', '/channels');
//         }
//
//
});
