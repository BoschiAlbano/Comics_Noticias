import React, {useState, useEffect, useRef} from 'react';
import getPost from './api';


const Card = () => {

    const [post, setPost] = useState({title:"El Post"});
    const [loading, setloading] = useState(true);
    const MontarRef = useRef(true)

    const ObtenerPost = () =>{
        getPost().then((res) => {

            setTimeout(() => {

                if(MontarRef.current){
                    setPost(res);
                    setloading(false); 
                }
                
            }, 2000);

        })
    }
    useEffect(() => {
        ObtenerPost();
        console.log("Mismo porble entra dos veces al efecto - tema de react strictmode")
        // Cuando se desmonte el componente el ref cambia y por lo tanto no muestra el post
        return () => {
            MontarRef.current = false;
        }
    }, []);

    if(loading) return <h1>Loading...</h1>

    return (
        <div className="w-full bg-slate-100 p-5">
            <h1>{post.title}</h1>
        </div>
    );
}

export default Card;
