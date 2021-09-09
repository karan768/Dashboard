import './Dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboardContainer">
      <div class="dropdown">
        <button class="dropbtn">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.676 7.14458H10.8104V5.00395L12.1354 0.832079C12.2417 0.522704 12.0635 0.019579 11.526 0.000828964H0.641661C0.379161 -0.017921 -0.133339 0.282079 0.0322856 0.832079L1.35729 5.00395V14.6758C1.35729 15.029 1.64166 15.3133 1.99479 15.3133H14.676C15.0292 15.3133 15.3135 15.029 15.3135 14.6758V7.78208C15.3135 7.42895 15.0292 7.14458 14.676 7.14458ZM10.6573 1.27583L9.68541 4.3352H2.48541L1.51354 1.27583H10.6573ZM6.60416 14.0383H5.56354V11.2696H6.60416V14.0383ZM9.53541 14.0383H7.88229V10.629C7.88229 10.2758 7.59791 9.99145 7.24479 9.99145H4.92604C4.57291 9.99145 4.28854 10.2758 4.28854 10.629V14.0383H2.63229V5.61333H9.53229V14.0383H9.53541ZM14.0417 14.0383H10.8135V8.41958H14.0417V14.0383Z" fill="white"/>
          </svg>
          Committee(s)
          <svg className="downArrrow"width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.61032 7.20374C5.82106 7.45475 6.16901 7.43486 6.37484 7.20374L11.8809 0.84402C12.0598 0.637746 12.0328 0.302239 11.8294 0.120817C11.626 -0.0606055 11.2952 -0.0332679 11.1164 0.173007L5.99258 6.09284L0.868812 0.170521C0.689933 -0.0357532 0.383634 -0.0357532 0.155747 0.145669C-0.0476353 0.327091 -0.0476353 0.637746 0.131243 0.84402L5.61032 7.20374Z" fill="white"/>
          </svg>
        </button>
        <div class="dropdown-content">
        <a href="/#">Personal Information</a>
        <a href="/#">Profile Information</a>
        <a href="/#">Terms & Agreements</a>
        </div>
      </div>
      <div className="mainHeading">
        <p>Select Committees</p>
      </div>
      <div className="subHeading">
        <p>Search the committees you want apply for membership or select from the below list.</p>
      </div>
      <div className="subNav">
        <div className="committee">
          <p>Committees</p></div>
        <div className="details">
          <p>Details</p></div>
        <div className="summary">
          <p>Summary</p></div>
      </div>
      <div className="searchContainer">
        <div className="searchDropDown dropdown">
          <p>Committee</p>
          <button class="dropbtn">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.61032 7.20374C5.82106 7.45475 6.16901 7.43486 6.37484 7.20374L11.8809 0.84402C12.0598 0.637746 12.0328 0.302239 11.8294 0.120817C11.626 -0.0606055 11.2952 -0.0332679 11.1164 0.173007L5.99258 6.09284L0.868812 0.170521C0.689933 -0.0357532 0.383634 -0.0357532 0.155747 0.145669C-0.0476353 0.327091 -0.0476353 0.637746 0.131243 0.84402L5.61032 7.20374Z" fill="white"/>
            </svg>
          </button>
          <div class="dropdown-content">
          <a href="/#">Personal Information</a>
          <a href="/#">Profile Information</a>
          <a href="/#">Terms & Agreements</a>
          </div>
        </div>
        <div className="searchFieldContainer">
          <input placeholder="Type here"></input>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3359 18.2109L14.7344 13.6094C15.875 12.2188 16.5625 10.4375 16.5625 8.49609C16.5625 4.04297 12.9492 0.429688 8.49609 0.429688C4.03906 0.429688 0.429688 4.04297 0.429688 8.49609C0.429688 12.9492 4.03906 16.5625 8.49609 16.5625C10.4375 16.5625 12.2148 15.8789 13.6055 14.7383L18.207 19.3359C18.5195 19.6484 19.0234 19.6484 19.3359 19.3359C19.6484 19.0273 19.6484 18.5195 19.3359 18.2109ZM8.49609 14.957C4.92969 14.957 2.03125 12.0586 2.03125 8.49609C2.03125 4.93359 4.92969 2.03125 8.49609 2.03125C12.0586 2.03125 14.9609 4.93359 14.9609 8.49609C14.9609 12.0586 12.0586 14.957 8.49609 14.957Z" fill="#939393"/>
          </svg>
        </div>
      </div>
      <div className="modal">
        <a href="/test">Can't find the committee/standard?</a>
      </div>
      <div className="selectedCommitte">
        <div className="demo">
          <div className="committeBlock">
          2 committee(s) selected 
          </div>
          <div className="hide">
            <a href='/#'>Hide</a>
          </div>
        </div>
        <hr />
        <div>
          <div className="selectedCommittteeBlock">
            <div className="committeBlock block-child">Special Working Group on Industry Experience for New Plants (ABC III & ABC XI)</div>
            <div className="deleteSvgCont">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3349 4.36552H1.63284C1.25406 4.36552 0.888346 4.7443 0.966713 5.13287L2.63202 15.4316C2.69733 15.7647 2.96508 15.9998 3.29814 15.9998H12.699C13.032 15.9998 13.2998 15.768 13.3324 15.4316L14.9977 5.13287C15.0598 4.8292 14.8051 4.36552 14.3349 4.36552ZM12.1341 14.6676H3.86631L2.43284 5.70103H13.5675L12.1341 14.6676Z" fill="#FF6D6D"/>
              <path d="M15.3339 2.36735H10.4V1.86776C10.4 0.835918 9.56735 0 8.53224 0H7.46449C6.43265 0 5.59673 0.832653 5.59673 1.86776V2.36735H0.666122C0.300408 2.36735 0 2.66776 0 3.03347C0 3.39918 0.300408 3.69959 0.666122 3.69959H15.3339C15.6996 3.69959 16 3.39918 16 3.03347C16 2.66776 15.6996 2.36735 15.3339 2.36735ZM9.06775 2.36735H6.93551V1.86776C6.93551 1.56735 7.16735 1.33551 7.46775 1.33551H8.53551C8.83592 1.33551 9.06775 1.56735 9.06775 1.86776V2.36735Z" fill="#FF6D6D"/>
              <path d="M5.93324 12.6657C6.29896 12.6657 6.59937 12.3653 6.59937 11.9996V7.73186C6.59937 7.36614 6.29896 7.06573 5.93324 7.06573C5.56753 7.06573 5.26712 7.36614 5.26712 7.73186V11.9996C5.26712 12.3653 5.56753 12.6657 5.93324 12.6657Z" fill="#FF6D6D"/>
              <path d="M9.73369 12.6657C10.0994 12.6657 10.3998 12.3653 10.3998 11.9996V7.73186C10.3998 7.36614 10.0994 7.06573 9.73369 7.06573C9.36797 7.06573 9.06757 7.36614 9.06757 7.73186V11.9996C9.06757 12.3653 9.36797 12.6657 9.73369 12.6657Z" fill="#FF6D6D"/>
              </svg>
            </div>
          </div>
          <hr />
          <div className="selectedCommittteeBlock">
            <div className="committeBlock block-child">Special Working Group on Industry Experience for New Plants (ABC III & ABC XI)</div>
            <div className="deleteSvgCont">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.3349 4.36552H1.63284C1.25406 4.36552 0.888346 4.7443 0.966713 5.13287L2.63202 15.4316C2.69733 15.7647 2.96508 15.9998 3.29814 15.9998H12.699C13.032 15.9998 13.2998 15.768 13.3324 15.4316L14.9977 5.13287C15.0598 4.8292 14.8051 4.36552 14.3349 4.36552ZM12.1341 14.6676H3.86631L2.43284 5.70103H13.5675L12.1341 14.6676Z" fill="#FF6D6D"/>
              <path d="M15.3339 2.36735H10.4V1.86776C10.4 0.835918 9.56735 0 8.53224 0H7.46449C6.43265 0 5.59673 0.832653 5.59673 1.86776V2.36735H0.666122C0.300408 2.36735 0 2.66776 0 3.03347C0 3.39918 0.300408 3.69959 0.666122 3.69959H15.3339C15.6996 3.69959 16 3.39918 16 3.03347C16 2.66776 15.6996 2.36735 15.3339 2.36735ZM9.06775 2.36735H6.93551V1.86776C6.93551 1.56735 7.16735 1.33551 7.46775 1.33551H8.53551C8.83592 1.33551 9.06775 1.56735 9.06775 1.86776V2.36735Z" fill="#FF6D6D"/>
              <path d="M5.93324 12.6657C6.29896 12.6657 6.59937 12.3653 6.59937 11.9996V7.73186C6.59937 7.36614 6.29896 7.06573 5.93324 7.06573C5.56753 7.06573 5.26712 7.36614 5.26712 7.73186V11.9996C5.26712 12.3653 5.56753 12.6657 5.93324 12.6657Z" fill="#FF6D6D"/>
              <path d="M9.73369 12.6657C10.0994 12.6657 10.3998 12.3653 10.3998 11.9996V7.73186C10.3998 7.36614 10.0994 7.06573 9.73369 7.06573C9.36797 7.06573 9.06757 7.36614 9.06757 7.73186V11.9996C9.06757 12.3653 9.36797 12.6657 9.73369 12.6657Z" fill="#FF6D6D"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="experienceContainer">
        <div className="experienceBlock">
          <div className="headingConatiner">
            <div className="experienceHeadline">
              Special Working Group on Industry Experience for New Plants (ABC III & ABC XI)
            </div>
            <div className="experienceSubheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
          </div>
          <input type="checkbox" />
        </div>
        <div className="experienceBlock">
          <div className="headingConatiner">
            <div className="experienceHeadline">
              ABC III Construction of Nuclear Facility Components Argentina International Working Group (QWE)
            </div>
            <div className="experienceSubheading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
          </div>
          <input type="checkbox" />
        </div>
      </div>
    </div>
      <div className="footer">
      <div className="nextBarContainer">
        <div className="nextBarBlock">
          <button className="nextCta">Next Step</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
