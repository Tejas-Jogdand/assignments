import { useRecoilValueLoadable } from "recoil";
import { profileAtomFamily } from '../store/atom/atom'


export const GithubCard = ({id}) => {

    console.log('GitHub rendered');

    const response = useRecoilValueLoadable(profileAtomFamily(id))
    // console.log(response.state )
    if (response.state == "loading") {
        return (
            <div className="profile-card">
                <div className='profile-card-top'>
                    <div className='profile-card-img'>
                        <img alt="Loading..." />
                    </div>
                    <div>
                        <p>Loading...</p>
                        <p>Loading...</p>
                    </div>
                    <div>
                        <p>Loading...</p>
                    </div>
                </div>
                <div className='profile-card-info'>
                    <div>
                        <p>Loading...</p>
                        <p>Public Repos</p>
                    </div>
                    <div>
                        <p>Loading...</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p>Loading...</p>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        )
    }
    else if (response.state == "hasValue") {
        const currentProfile = response.contents.data
        // console.log(currentProfile)
        return (
            <div className="profile-card">
                <div className='profile-card-top'>
                    <div className='profile-card-img'>
                        <img src={currentProfile.avatar_url} alt="Profile Photo" />
                    </div>
                    <div>
                        <p>{currentProfile.name} {currentProfile.user_view_type}</p>
                        <p>{currentProfile.location}</p>
                    </div>
                    <div>
                        <p>{currentProfile.bio}</p>
                    </div>
                </div>
                <div className='profile-card-info'>
                    <div>
                        <p>{currentProfile.public_repos}</p>
                        <p>Public Repos</p>
                    </div>
                    <div>
                        <p>{currentProfile.followers}</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p>{currentProfile.following}</p>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        )
    }
    else if(response.state == "hasError"){
        return(
            <div className="profile-card">
                <div className='profile-card-top'>
                    <div className='profile-card-img'>
                        <img alt="NA" />
                    </div>
                    <div>
                        <p>NA</p>
                        <p>NA</p>
                    </div>
                    <div>
                        <p>NA</p>
                    </div>
                </div>
                <div className='profile-card-info'>
                    <div>
                        <p>NA</p>
                        <p>Public Repos</p>
                    </div>
                    <div>
                        <p>NA</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p>NA</p>
                        <p>Following</p>
                    </div>
                </div>
            </div>
        )
    }

}