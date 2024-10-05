async function takeTime(){
    
    await new Promise((resolve)=>{
        setTimeout(resolve, 3000);
    });
}

export default async function About(){
    //throw new Error("This is a Manual Error");
    await takeTime();
    return(
        <>
            <h1>In About page</h1>
        </>
    )
}