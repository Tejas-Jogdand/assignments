import '../App.css'
import {useRecoilValueLoadable} from 'recoil'
import {profileCardAtom} from '../store/atom/profileCardAtoms'

export const ProfileCard = ({ id }) => {
  // return (
  //   <div className="profile-card">
  //     <div className='profile-card-top'>
  //       <div className='profile-card-img'>
  //       <img src="" alt="Profile Photo" />
  //       </div>
  //       <div>
  //       <p>Rita Correia 32</p>
  //       <p>London</p>
  //       </div>
  //     </div>
  //     <hr />
  //     <div className='profile-card-info'>
  //       <div>
  //         <p>80K</p>
  //         <p>Followers</p>
  //       </div>
  //        <div>
  //         <p>803K</p>
  //         <p>Likes</p>
  //       </div>
  //        <div>
  //         <p>1.4K</p>
  //         <p>Photos</p>
  //       </div>
  //     </div>
  //   </div>
  // )

  const profileDetails = useRecoilValueLoadable(profileCardAtom)
  const currentProfile = profileDetails.contents

  return (
    <div className="profile-card">
      <div className='profile-card-top'>
        <div className='profile-card-img'>
        <img src={currentProfile.photoUrl} alt="Profile Photo" />
        </div>
        <div>
        <p>{currentProfile.name} {currentProfile.age}</p>
        <p>{currentProfile.location}</p>
        </div>
      </div>
      <div className='profile-card-info'>
        <div>
          <p>{currentProfile.followersCount}K</p>
          <p>Followers</p>
        </div>
         <div>
          <p>{currentProfile.likesCount}K</p>
          <p>Likes</p>
        </div>
         <div>
          <p>{currentProfile.photosCount}K</p>
          <p>Photos</p>
        </div>
      </div>
    </div>
  )
}