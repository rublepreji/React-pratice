import {useForm} from 'react-hook-form'

type FormData ={
    name: string;
    email: string;
    age: number;
    password: string
}

function SampleForm(){
    const {register, handleSubmit, formState:{errors, isValid, isSubmitSuccessful, touchedFields, dirtyFields, submitCount, isSubmitting}} = useForm<FormData>({
        defaultValues:{
        name: '',
        email:'',
        password: '',
        age: undefined
        }
    })

    function onSubmit(data:FormData){
        console.log(data)
    }
    return (
        <>
        {isSubmitSuccessful && <h3>Form submitted successful!</h3>}
        <h2>Submitted count: {submitCount}</h2>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <input type="text" {...register('name',{
                required:"name is required"

            })}/>
            {dirtyFields.name && <p>Name was changed!</p>}
            {errors.name && <p>{errors.name.message}</p>}

            <input type="email" {...register('email',{
                required:'Email required',
                pattern:{
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email'
                }
            })} />

            {errors.email && <p>{errors.email.message}</p>}

            <input type="number" {...register('age',{
                required:'Age is required',
                min:{
                    value: 18, message:'Minimum age must have 18'
                },
                valueAsNumber:true
            })} />
            {touchedFields.email && <p>You have visited the the email field</p>}
            {errors.age && <p>{errors.age.message}</p>}

            <input type="text" {...register('password',{
                required:"Password required",
                minLength:{
                    value: 8,
                    message:'Password must have 8 letters'
                },
                setValueAs: value=>value.trim(),
                pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                    message: 'Password must contain uppercase, lowercase, and a number'
                }
            })} />
            {errors.password && <p>{errors.password.message}</p>}

            <button type='submit'>{isSubmitSuccessful? 'Submitted' : isSubmitting? 'Submitting': 'submit'}</button>
        </form>

        </>
    )
    
}


export default SampleForm;