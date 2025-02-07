import { Link } from "react-router-dom";
import styles from './Profile.module.css'
import Icon from "../../components/Icon/Icon";

import { useEffect } from "react";
import { useState } from "react";

import './Profile.css'

import * as profileService from '../../services/profileService'

import Experience from "../../components/Experience/Experience";
import Education from "../../components/Education/Education"
import Training from "../../components/Training/Training";


const Profile = (props) => {
  const {profile} = props

  console.log(profile)

  if (!profile) return "loading"

  return (
    <section className="profileDetails">
      <div className={styles.container}>
        <h1 id="talentName">{profile.name}</h1>
        <p>{profile.pronouns}</p>
        {profile.photo && <img src={profile.photo} alt="user talent pic" ></img>}
        <p>Location: {profile.location}</p>
        <p>Phone Number: {profile.phoneNumber}</p>
        <p>Email: {props.user.email}</p>
        <a href={`${profile.website}`}>Visit {profile.name}'s website</a>
        {profile.isCd && <p>Company: {profile.cdAccount.company}</p>}
      </div>

      {profile.talentAccount
        &&
      <>

        <div className={styles.container}>
          <div className={styles.container} id="about-me-details">
            <div id="detail">
              <p>About:</p>
              <p>{profile.talentAccount.about}</p>
            </div>
            <div id="detail">
              <p>Union Status:</p>
              <p>{profile.talentAccount.unionStatus}</p>
            </div>
            <div id="detail">
              <p>Hair:</p>
              <p>{profile.talentAccount.hair}</p>
            </div>
            <div id="detail">
              <p>Eyes:</p>
              <p>{profile.talentAccount.eyes}</p>
            </div>
            <div id="detail">
              <p>Height:</p>
              <p>{profile.talentAccount.height}</p>
            </div>
            <div id="detail">
              <p>Weight:</p>
              <p>{profile.talentAccount.weight}</p>
            </div>
            <div id="detail">
              <p>Skills:</p>
              <p>{profile.talentAccount.skills}</p>
            </div>
            <div id="detail">
              <p>Trades:</p>
              <p>{profile.talentAccount.trades}</p>
            </div>
          </div>
        </div>

        {
          (profile.talentAccount)
          &&
          <>
            <Link className="add" to="/profile/add-experience" state={{ talentId: profile.talentAccount?._id }}>Add Experience</Link>
            {profile.talentAccount.experience?.map(experience =>
              <>
                <Experience
                  handleDeleteExperience={props.handleDeleteExperience}
                  key={experience._id}
                  experience={experience}
                  talentId={profile.talentAccount?._id}
                  />
                <form onSubmit={() => props.handleDeleteExperience(profile.talentAccount?._id, experience?._id)}>
                  <button id="remove" type='submit'>REMOVE RECORD</button>
                </form>
              </>
            )}
          </>
        }
          {/* </div> */}

          {
            (profile.talentAccount)
            &&
            <>
              <h2>Education</h2>
              <Link className="add" to="/profile/add-education" state={{ talentId: profile.talentAccount?._id }}>Add Education</Link>
              {profile.talentAccount.education?.map(education =>
                <>
                  <Education
                    key={education?._id}
                    education={education}
                    talentId={profile.talentAccount?._id}
                    handleDeleteEducation={props.handleDeleteEducation}
                    />
                  <form onSubmit={() => props.handleDeleteEducation(profile.talentAccount?._id, education?._id)}>
                    <button id="remove" type='submit'>REMOVE RECORD</button>
                  </form>
                </>
              )}
            </>
          }
          {/* </div> */}

          <div className={styles.container}>
            <div className="education-section">
              <h2>Education</h2>
              {profile.talentAccount.education.map(education =>
                <>
                  <Education
                    key={education._id}
                    education={education}
                    // talentId={talentId}
                    handleDeleteEducation={props.handleDeleteEducation}
                  />
                  <form onSubmit={() => props.handleDeleteEducation(props.talentAccount._id, education._id)}>
                    <button id="remove" type='submit'>REMOVE RECORD</button>
                  </form>
                </>
              )}

            </div>
          </div>

          {
            (profile.talentAccount)
            &&
            <>
              <h2>Training</h2>
              <Link className="add" to="/profile/add-training" state={{ talentId: profile.talentAccount?._id }}>Add Training</Link>
          {profile.talentAccount.training?.map(training =>
            <>
              <Training
                key={training?._id}
                training={training}
                talentId={profile.talentAccount?._id}
                handleDeleteTraining={props.handleDeleteTraining}
                />
              <form onSubmit={() => props.handleDeleteTraining(profile.talentAccount?._id, training?._id)}>
                <button id="remove" type='submit'>REMOVE RECORD</button>
              </form>
            </>
          )}
          </>
          }
          {/* </div> */}
        </>
      }

      <div className={styles.container}>
{/* 
      <Link to={`/profile/edit`} className={styles.link}><button className={styles.editBtn}></button></Link> */}
        <Link
        id="editLink"
        to="/profile/edit"
        className={styles.editProfileBtn}
        state={{ isCd: profile.isCd, talentId: profile.talentAccount?._id, cdId: profile.cdAccount?._id, profile: profile }}
        >
          <Icon name='Edit' />
        </Link>

      </div>

    </section>
  );
}

export default Profile;