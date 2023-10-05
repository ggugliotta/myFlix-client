import { Link } from "react-router-dom";
import './profile-view.scss';
import axios from 'axios';

export function ProfileView{(movies, OnUpdateUserInfo)} (
    const [user, setUser] = useState({})

    const favoriteMovieList = movie.filter((movies) => {
    };

    const getUser = () => {}

    const handleSubmit = (e) => {}

    const removeFav = (id) => {}

    const handleUpdate = (e) => {};

    useEffect(() => {} }, [])


    return (
        <div>
          <p>Username: {user.Username}</p>
          <p>Email: {user.Email}</p>
        </div>
            <h2>Favorite Movies</h2>
            {favoriteMoviesList.map((movie) => {
               return (
                <div key={movies._id}>
                    <img src={movies.ImageUrl} />
                    <Link to={`/movies/${movies._id}`}>
                        <h4>{movies.Title}</h4>
                    </Link>
                    <button variant="secondary" onClick={() => removeFav(movies._id)}>Remove from list</button>
                </div>
              )
           })
           }
        </div>

     <form className='profile-form' onSubmit={(e) => handleSubmit(e)}>
        <h2>Want to change some information?</h2>
        <label>Username:</label>
        <input>
            type='text'
            name='Username'
            defaultValue={user.Username}
            onChange={e => handleUpdate(e)} />
        <label>Password</label>
        <input
            type='password'
            name='password'
            defaultValue={user.Password}
            onChange={e => handleUpdate(e)} />

        <label>Email address</label>
        <input
            type='email'
            name='email'
            defaultValue={user.Email}
            onChange={e => handleUpdate(e.target.value)} />
        <button variant="primary" type="submit">
            Update 
        </button>
        </input>
    </form>