export default function New() {

    return (
        <form 
        className="flex flex-col bg-[#FCFCFC] text-[#282828] p-8 rounded "
        onSubmit={(e)=>{
            e.preventDefault();
            console.log(e.target);
            
            let postObj={
                authorID: localStorage.getItem("userID"),
                title: e.target[0].value,
                byline: e.target[1].value,
                content: e.target[2].value,
                postedAt: Date.now(),
                postID: Math.floor(Math.random() * (999999999 - 111111111) + 111111111)
            }

            fetch("http://localhost:3030/post/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(postObj)
            }).then(res=>res.json()).then(data=>{
                console.log(data);
                
            })
        }}
        >
            <h3 className="text-2xl font-medium mb-4">
                Post
            </h3>
            <label htmlFor="title">Title<span className="text-red-500">*</span></label>
            <input 
            type="text" 
            name="title"
            placeholder="Blog #171 - I got a new bike!"
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            />
            <label htmlFor="byline">Byline<span className="text-red-500">*</span></label>
            <input 
            type="text" 
            name="byline"
            placeholder="New bike, new ME!"
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            />
            <label htmlFor="data">Data<span className="text-red-500">*</span></label>
            <textarea 
            type="text" 
            name="data"
            rows={4}
            placeholder="Hello guys! I just bought my dream bike."
            className="block text-[#0F0F0F] bg-[#E8F0FE] px-4 py-2 rounded-sm my-2 outline-2 focus:outline-[#88909d] disabled:hidden"
            ></textarea>
            <input
            type="submit"
            className="bg-[#2e405f] hover:underline cursor-pointer text-white px-2 py-1 rounded inline-block"
            />
        </form>
    )
}