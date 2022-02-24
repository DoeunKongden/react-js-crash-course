import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title,setTittle]= useState('');
    const [body,setBody]= useState('');
    const [author,setAuthor]= useState('Doeun Kongden');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog= {title,body,author};
        setIsPending(true);

        fetch('http://localhost:4400/blog',{
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog),
        }).then(() =>  {
             console.log("New blog added"); 
             setIsPending(false);
             history.push("/Home")
        })
        
    }
     return(
        <div className="create"> 
            <h1>Add new blog page</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input 
                type="text" 
                required 
                value={title}   //also the value of the import is gonna be set to what the user input aswell 
                onChange={(e) => setTittle(e.target.value)} //inside the anonymous funtion we have access to the event function in which we will use it to setTitle e.target.value 
                                                            //e.target.value mean that it target what ever the input value is and pass that to the setTitle 
                ></input>

                <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Blog Author:</label>
                <select 
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Doeun Kongden">Doeun Kongden</option>
                    <option value="Axie Infinity">Axie Infinity</option>
                    <option value="BIT Coin">BIT Coin</option>
                    <option value="Mr Ericksen"></option>
                </select>

                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding new Blog...</button>}

            </form>
        </div>
     );
}

export default Create;