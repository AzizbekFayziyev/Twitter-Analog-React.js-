import "./AppHeader.css"

export default function AppHeader({liked,allPosts}) {
    return(
        <>
       <div className="app-header d-flex">
              <h1>Azizbek Fayziyev</h1>
              <h2>{allPosts} Posts, Like {liked}</h2>
       </div>
        </>
    ) 
}