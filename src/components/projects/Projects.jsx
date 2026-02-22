import React from 'react'
import './projects.css'
const Projects = () => {
  return (
    <section id="projects">
      <h5> See What I have Build</h5>
      <h2>My Personal Projects</h2>

      <div className='container project_container'>
        <div className='project_2'>
          <h3 className='project_title'> <b>KhabriChain - Decentralized reporting system </b></h3>
          <div className='project_content'>
            <p className='project_tech'><b>Blockchain:</b> Ethereum, Solidity | <b>Front-End: </b> ReactJs, JavaScript, HTML, CSS, Bootstrap | <b>Back-End:</b> Python, Flask </p>
            <hr></hr>
            <p>
              <ul className='text-light' >
                <li>
                  Designed and developed an intelligent and privacy preserving framework that allows users to anonymously report or tip any criminal activities.
                </li>
                <li>
                  Developed a real-time crime detection system without compromising on user privacy using a combination of blockchain and 3rd party SDK integrations for Adhaar based user authentications.
                </li>
              </ul>
              <div className='project_button'>
              <a href="https://github.com/shahkushal38/khabrichain" className='btn btn-primary'>Github Repository</a>
              <a href="https://www.youtube.com/watch?v=oEM4TUQ87kw" className='btn btn-primary'> Project Demo - YouTube </a>
              <a href="https://devfolio.co/projects/khabrichain-decentralized-reporting-system-7b59" className='btn btn-primary'> Devfolio </a>
            </div>
            </p>
          </div>

        </div>

        <div className='project_1'>
          <h3 className='project_title'> <b>KYC Verified CrowdFunding Solution </b></h3>
          <div className='project_content'>
            <p className='project_tech'><b>Blockchain:</b> Ethereum, Solidity, 5ireChain | <b>Front-End: </b> VueJs, JavaScript, HTML, CSS, Bootstrap | <b>Back-End:</b> Python, Flask | <b>Machine-Learning:</b> HaarCascades, DeepFace Face Verification model  </p>

            <hr></hr>
            <p>
              <ul className='text-light' >
                <li>
                  Developed a sustainable hybrid model of decentralized crowdfunding application backed with centralised KYC system solving the problem of user trusts and abiding by government compliances and regulations, which was missing in traditional web3 blockchain application
                </li>
                <li>
                  Developed solidity smart contracts of an end to end crowdfunding application using ERC-20 token standards along with deploying the contracts on 5ireChain Testnet
                </li>
              </ul>
            </p>
            <div className='project_button'>
              <a href="#contact" className='btn btn-primary'>Github Repository</a>
              <a href="#contact" className='btn btn-primary'> Project Demo - YouTube </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Projects