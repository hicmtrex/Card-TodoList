import React,{useRef} from 'react';

const Form = ({addUser}) => {
     const refName = useRef('')
     const refAge = useRef('')
    const refEmail = useRef('')
    const refJob = useRef('')
     const refPhone = useRef('')
     const refImage = useRef('')

    function handleSubmit(e) {
        e.preventDefault();
      const  inputName = refName.current.value;
      const  inputAge = refAge.current.value;
      const  inputEmail = refEmail.current.value;
        const inputJob = refJob.current.value;
        const inputPhone = refPhone.current.value;
        const inputImage = refImage.current.value;
        if (inputName === '' || +inputAge < 1) return;
        addUser(inputName, inputAge, inputEmail,inputJob,inputPhone, inputImage)
        refName.current.value = ''
        refAge.current.value = ''
        refEmail.current.value = ''
        refJob.current.value=''
        refPhone.current.value=''
        refImage.current.value=''
    };
 

    return (
            <div className="col-md-5 offset-3"> 
            <form onSubmit={handleSubmit} action="">
                <div className="mb-3">
                <label className="form-label" htmlFor="name">Full Name</label>
                    <input className="form-control" type="text" name="name"
                    ref={refName} id="name"  required/>
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="age">Age</label>
                    <input className="form-control" type="number" name="age"
                ref={refAge} id="age" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="email">Email</label>
                    <input className="form-control" type="email" name="email"
                    ref={refEmail}  id="email" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="job">Job</label>
                    <input className="form-control" type="text" name="job"
                    ref={refJob}  id="job" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="phone">Phone</label>
                    <input className="form-control" type="number" name="phone"
                    ref={refPhone}  id="phone" required />
                </div>
                <div className="mb-3">
                <label className="form-label" htmlFor="image">Image Url</label>
                    <input className="form-control" type="url" name="image"
                    ref={refImage}   id="image"  required/>
                </div>
                <button className="btn btn-primary">Add User</button>
            </form>
            </div>
     
    );
}

export default Form;
