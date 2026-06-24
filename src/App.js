import React, { useState } from 'react';
import './App.css';
import './style.js'
function App() {


	// State to manage whether the mobile menu is open or closed
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = (e) => {
    e.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="App">
      <div id="top">

	
    	
   <header className="row">
      <div className="top-bar">
        {/* Added dynamic 'is-clicked' class to the toggle button itself if your CSS styles it */}
        <a 
          className={`menu-toggle ${isMenuOpen ? 'is-clicked' : ''}`} 
          href="#" 
          onClick={toggleMenu}
        >
          <span>Menu</span>
        </a>

        <div className="logo">
          <a href="/">Ashif M I</a>
        </div>              

        {/* Dynamically adds 'is-visible' or a similar style class to display the block when true */}
        <nav 
          id="main-nav-wrap" 
          style={{ display: isMenuOpen ? 'block' : '' }} // Inline fallback if CSS transitions aren't hooked up
          className={isMenuOpen ? 'is-visible' : ''}
        >
          <ul className="main-navigation">
            <li className="current">
              <a className="smoothscroll" href="#intro" onClick={handleLinkClick}>Home</a>
            </li>
            <li>
              <a className="smoothscroll" href="#about" onClick={handleLinkClick}>About</a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume" onClick={handleLinkClick}>Resume</a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio" onClick={handleLinkClick}>Portfolio</a>
            </li>
            <li>
              <a className="smoothscroll" href="#services" onClick={handleLinkClick}>Services</a>
            </li>                    
            <li>
              <a className="smoothscroll" href="#contact" onClick={handleLinkClick}>Contact</a>
            </li>  
                        
          </ul>
        </nav>          
      </div>          
    </header>
  

	
   <section id="intro">   

   	<div className="intro-overlay"></div>	

   	<div className="intro-content">
   		<div className="row">

   			<div className="col-twelve">

	   			<h5>Hello, World.</h5>
	   			<h1>I'm Ashif M I.</h1>

	   			<p className="intro-position">
	   				<span>AOI Programmer</span>
	   				<span>AOI Technician</span> 
	   			</p>

	   			<a className="button stroke smoothscroll" href="#about" title="">More About Me</a>

	   		</div>  
   			
   		</div>   		 		
   	</div> 
   	<ul className="intro-social">

		<li><a href="https://www.instagram.com/_4shi.07_?igsh=dW00emRsbDRlYjdj" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
   <li><a href="https://www.linkedin.com/in/ashif-m-i-5649a32b2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
   <li><a href="https://github.com/Ashif788/PORTFOLIO.git" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>     
         
      </ul> 
   </section> 


  
   <section id="about">  

   	<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>About</h5>
   			<h1>Let me introduce myself.</h1>

   			<div className="intro-info">

   				<img src="images/profile-pic.jpg" alt="Profile Picture"/>

   				<p className="lead"> Experienced EMS Technician and AOI Programmer with a proven background in process failure analysis and automated optical inspection at tier-1 manufacturing facilities. Skilled in defect identification, machine programming, and production line optimization.</p>
   			</div>   			

   		</div>   		
   	</div> 
   	<div className="row about-content">

   		<div className="col-six tab-full">

   			<h3>Profile</h3>
   			<p> Detail-oriented Computer Science professional with extensive hands-on experience as an AOI Programmer and Technician within leading electronics manufacturing services (EMS) companies. Adept at optimizing automated inspection processes, troubleshooting complex systems, and leveraging programming skills to drive operational efficiency. Strong analytical problem-solver combining a solid foundation in software principles with practical, high-precision technical expertise.</p>

   			<ul className="info-list">
   				<li>
   					<strong>Fullname:</strong>
   					<span>Ashif M I</span>
   				</li>
   				<li>
   					<strong>Birth Date:</strong>
   					<span>March 08, 2002</span>
   				</li>
   				<li>
   					<strong>Job:</strong>
   					<span>Aoi Technician</span>
   				</li>
   				<li>
   					<strong>Website:</strong>
   					<span>www.kardswebsite.com</span>
   				</li>
   				<li>
   					<strong>Email:</strong>
   					<span>ashigasif@gmail.com</span>
   				</li>

   			</ul> 

   		</div>

   		<div className="col-six tab-full">

   			<h3>Skills</h3>
   			<p>Technical and proactive professional with proven expertise in electronics manufacturing and SMT line operations. Skilled in end-to-end AOI program creation from Gerber files, real-time SMT machine troubleshooting, and executing detailed PCB failure analysis. Experienced in creating and analyzing reflow thermal profiles to ensure high-quality soldering standards. Demonstrates strong operational leadership with a track record of independently managing complete shift operations to consistently meet production targets and maintain quality compliance.</p>

				<ul className="skill-bars">
				   <li>
				   	<div className="progress percent95"><span>95%</span></div>
				   	<strong> AOI Programming</strong>
				   </li>
				   <li>
				   	<div className="progress percent85"><span>85%</span></div>
				   	<strong>SMT Troubleshooting</strong>
				   </li>
				   <li>
				   	<div className="progress percent70"><span>70%</span></div>
				   	<strong>Thermal Profiling</strong>
				   </li>
				   <li>
				   	<div className="progress percent95"><span>95%</span></div>
				   	<strong>Quality Assurance</strong>
				   </li>
				   <li>

				   	<div className="progress percent95"><span>95%</span></div>
				   	<strong>Excell</strong>
				   </li>

				    <li>

				   	<div className="progress percent95"><span>95%</span></div>
				   	<strong>Powerpoint</strong>
				   </li>

				   
      
				</ul> 

   		</div>

   	</div>

   	<div className="row button-section">
   		<div className="col-twelve">
   			<a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
   			<a href="#" title="Download CV" className="button button-primary">Download CV</a>
   		</div>   		
   	</div>

   </section> 


   
	<section id="resume" className="grey-section">

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Resume</h5>
   			<h1>More of my credentials.</h1>

   			<p className="lead">Versatile Technical Professional combining a strong foundation in Computer Science with hands-on expertise in electronics manufacturing automation. Highly skilled in end-to-end AOI program creation from Gerber files, real-time SMT machine troubleshooting, and reflow thermal profiling. Leverages  SQL and data processing capabilities to streamline workflows and analyze technical logs. A proactive problem-solver experienced in managing autonomous shift operations, dedicated to bridging the gap between hardware engineering and software optimization.</p>

   		</div>   		
   	</div> 

   	<div className="row resume-timeline">

   		<div className="col-twelve resume-header">

   			<h2>Work Experience</h2>

   		</div> 
   		<div className="col-twelve">

   			<div className="timeline-wrap">

   				<div className="timeline-block">

	   				<div className="timeline-ico">
	   					<i className="fa fa-graduation-cap"></i>
	   				</div>

	   				<div className="timeline-header">
	   					<h3>AOI Technician | Foxconn Hon Hai Technology Group</h3>
	   					<p>June 2025 - Present</p>
	   				</div>

	   				<div className="timeline-content">
	   					<h4>Program Development & Optimization:</h4>
	   					<p>Build, test, and deploy precise AOI (Automated Optical Inspection) programs directly from raw Gerber files and CAD data, minimizing false call rates and optimizing inspection cycle times.</p>

						<h4>Autonomous Shift Leadership:</h4>
	   					<p>Independently manage and supervise full-shift manufacturing line operations, coordinating resources to meet strict daily production targets and maintain quality standards.</p>

						<h4>Advanced Troubleshooting:</h4>
	   					<p>Serve as the primary technical point of contact for resolving complex AOI hardware and software faults, keeping machine downtime to an absolute minimum.</p>

						<h4>Root Cause & Failure Analysis:</h4>
	   					<p> Conduct meticulous PCB failure analysis on defective boards, isolating root causes of SMT defects (e.g., misalignment, bridging, tombstoning) to continuously improve overall yield rates.</p>
	   				</div>

	   			</div> 

	   			<div className="timeline-block">

	   				<div className="timeline-ico">
	   					<i className="fa fa-graduation-cap"></i>
	   				</div>

	   				<div className="timeline-header">
	   					<h3>Failure Analyst | Tata Electronics</h3>
	   					<p>September 2024 - June 2025</p>
	   				</div>

	   				<div className="timeline-content">
	   					<h4>Corrective & Preventive Action (CAPA):</h4>
	   					<p> Formulated and implemented strategic corrective actions to immediately resolve line defects and prevent recurring issues, significantly improving overall manufacturing yield.</p>
						<h4>Thermal Process Control:</h4>
	   					<p> Fabricated dedicated reflow profiling boards and systematically analyzed thermal data to calibrate reflow oven zones, ensuring optimal heat distribution and preventing component damage.</p>
						<h4>Documentation & Reporting:</h4>
	   					<p> Maintained detailed technical logs and failure analysis reports tracking defect trends to assist in auditing and refining upstream SMT processes.</p>

	   				</div>

	   			</div> 

	   			<div className="timeline-block">

	   				<div className="timeline-ico">
	   					<i className="fa fa-graduation-cap"></i>
	   				</div>

	   				<div className="timeline-header">
	   					<h3>Apprentice – IT & Network Support Hindustan Aeronautics Limited (HAL)</h3>
	   					<p>May 2024 - September 2024</p>
	   				</div>

	   				<div className="timeline-content">
	   					<h4>System Deployment & Hardware Support:</h4>
	   					<p>Installed, configured, and maintained workstations and peripheral devices; performed hardware troubleshooting and component replacements to minimize system downtime..</p>

						<h4>Cybersecurity & Maintenance:</h4>
	   					<p>Managed the deployment, updating, and monitoring of enterprise antivirus software, successfully mitigating security risks and ensuring system compliance with internal IT policies.</p>
	   				</div>

	   			</div> 

   			</div>    			

   		</div> 
   		
   	</div> 
   	
   	<div className="row resume-timeline">

   		<div className="col-twelve resume-header">

   			<h2>Education</h2>

   		</div> 

   		<div className="col-twelve">

   			<div className="timeline-wrap">

   				<div className="timeline-block">

	   				<div className="timeline-ico">
	   					<i className="fa fa-briefcase"></i>
	   				</div>

	   				<div className="timeline-header">
	   					<h3>Diploma</h3>
	   					<p>July 2021 - April 2024</p>
	   				</div>

	   				<div className="timeline-content">
	   					<h4>Cauvery Polytechnic Gonikoppal</h4>
	   					<p> Completed a comprehensive Diploma in Computer Science, combining robust theoretical knowledge with extensive hands-on technical training. The curriculum focused heavily on IT infrastructure and software engineering, equipping me with the skills to confidently diagnose and troubleshoot complex PC hardware, software, and operating system issues. In addition to system maintenance, I specialized in full-stack development, mastering the tools required to design, build, and deploy functional end-to-end web applications from frontend user interfaces to backend database integration.</p>
	   				</div>

	   			</div> 

	   			<div className="timeline-block">

	   				<div className="timeline-ico">
	   					<i className="fa fa-briefcase"></i>
	   				</div>

	   				<div className="timeline-header">
	   					<h3>Pre-university</h3>
	   					<p>July 2019 - June 2021</p>
	   				</div>

	   				<div className="timeline-content">
	   					<h4>Raffles International PU College Hodavada</h4>
	   					<p>Completed Pre-University education with a specialized focus on Computer Science alongside core sciences and mathematics. This foundational program provided a strong introduction to computing principles, logic building, and introductory programming. The coursework and practical labs cultivated a deep interest in technology, analytical problem-solving, and algorithmic thinking, establishing the essential technical baseline required for advanced studies in software development and systems engineering.</p>
	   				</div>

	   			</div>

	   			<div className="timeline-block">

	   				<div className="timeline-ico">
	   					<i className="fa fa-briefcase"></i>
	   				</div>

	   				<div className="timeline-header">
	   					<h3>Secondary School Leaving Certificate (SSLC)</h3>
	   					<p> June 2019</p>
	   				</div>

	   				<div className="timeline-content">
	   					<h4>Sacred Hearts Napoklu</h4>
	   					<p> Completed secondary education under the state board curriculum, establishing a strong foundational base in mathematics, science, and analytical disciplines. This period focused on building core academic strengths, effective time management, and collaborative problem-solving skills through coursework and extracurricular activities, providing the necessary academic groundwork for subsequent specialized studies in technical and computing fields.</p>
	   				</div>

	   			</div> 

   			</div>    			

   		</div>
   		
   	</div> 
		
	</section> 


	<section id="portfolio">

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Portfolio</h5>
   			<h1>Check Out Some of My Works.</h1>

   			<p className="lead">True success isn’t about where you start or the credentials you hold; it is built by embracing every shift, mastering the technical grit to solve real-world problems, and relentlessly learning the skills to build the future you want.</p>

   		</div>   		
   	</div> 

   	<div className="row portfolio-content">

   		<div className="col-twelve">

   		
	         <div id="folio-wrapper" className="block-1-2 block-mob-full stack">

	         	<div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/liberty.jpg" alt="Liberty"/>
	                  <a href="#modal-01" className="overlay">	                  	           
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
		     					       <h3 className="folio-title">Liberty</h3>	     					    
		     					    	 <span className="folio-types">
		     					       	  Profiling
		     					       </span>
		     					   </div>	                      	
	                     </div>                    
	                  </a>
	               </div>	               
	        		</div> 

	        		<div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/shutterbug.jpg" alt="Shutterbug"/>
	               	<a href="#modal-02" className="overlay">              		                  
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Shutterbug</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  AOI programing
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> 

	            <div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/clouds.jpg"alt="Clouds"/>
	                  <a href="#modal-03" className="overlay">             		                  
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Clouds</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Route Cause & Analysing Failure
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> 

	            <div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/beetle.jpg" alt="Beetle"/>
	                  <a href="#modal-04" className="overlay">                  	                 
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Beetle</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Troubleshooting
		     					      </span>		     		
		     					   </div>  	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div>   

	        		<div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/lighthouse.jpg" alt="Lighthouse"/>
	                  <a href="#modal-05" className="overlay">             		                  
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Lighthouse</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Multitasking
		     					      </span>		     		
		     					   </div> 	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div> 

	            <div className="bgrid folio-item">
	               <div className="item-wrap">
	               	<img src="images/portfolio/salad.jpg" alt="Salad"/>
	                  <a href="#modal-06" className="overlay">
	                     <div className="folio-item-table">
	                     	<div className="folio-item-cell">
	                     		<h3 className="folio-title">Salad</h3>	     					    
		     					    	<span className="folio-types">
		     					       	  Leadership
		     					      </span>		     		
		     					   </div>	                      	
	                     </div>                    
	                  </a>
	               </div>
	        		</div>    

	            
	            <div id="modal-01" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-liberty.jpg" alt="" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Liberty</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div className="categories">Profiling</div>			               
					   </div>

			        		      

				   </div> 

				   <div id="modal-02" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-shutterbug.jpg" alt="" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Shutterbug</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div className="categories">Web Design</div>			               
					   </div>

			             

				   </div> 

				   <div id="modal-03" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-clouds.jpg" alt="" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Clouds</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div className="categories">Web Design</div>			               
					   </div>

			             

				   </div> 

				   <div id="modal-04" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-beetle.jpg" alt="" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Beetle</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div className="categories">Branding</div>			               
					   </div>

			         	      

				   </div> 

				   <div id="modal-05" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-lighthouse.jpg" alt="" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Lighthouse</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div className="categories">AOI programing</div>			               
					   </div>

			         	      

				   </div> 

				   <div id="modal-06" className="popup-modal slider mfp-hide">	

				     	<div className="media">
				     		<img src="images/portfolio/modals/m-salad.jpg" alt="" />
				     	</div>      	

					   <div className="description-box">
					      <h4>Salad</h4>		      
					      <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>

					      <div className="categories">Branding</div>			               
					   </div>

			            

				   </div> 


				   

	         </div> 

   		</div> 

   	</div> 
		
	</section> 


	
	

	

	<section id="services">

		<div className="overlay"></div>

		<div className="row section-intro">
   		<div className="col-twelve">

   		
   			<h1>..Strieve Hard Keep Going..</h1>

   			

   		</div>   		
   	</div> 

   	<div className="row services-content">

   		<div id="owl-slider" className="owl-carousel services-list">

	      	<div className="service">	

	      		<span className="icon"><i className="icon-earth"></i></span>            

	            <div className="service-content">	

	            	 <h3>Webdesign</h3>

		            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	         		</p>
	         		
	         	</div> 	         	 

				</div> 

				<div className="service">	

					<span className="icon"><i className="icon-window"></i></span>                          

	            <div className="service-content">	

	            	<h3>Web Development</h3>  

		            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	         		</p>

	            </div>	                          

			   </div> 

			   <div className="service">

			   	<span className="icon"><i className="icon-paint-brush"></i></span>		            

	            <div className="service-content">

	            	<h3>Branding</h3>

		            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	        			</p> 

	            </div> 	            	               

			   </div> 

				<div className="service">

					<span className="icon"><i className="icon-toggles"></i></span>	              

	            <div className="service-content">

	            	<h3>UI/UX Design</h3>

		            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	         		</p> 
	         		
	            </div>                

				</div> 

			   <div className="service">

			   	<span className="icon"><i className="icon-image"></i></span>	            

	            <div className="service-content">

	            	<h3>Graphics Design</h3>

		            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	        			</p> 

	            </div>	               

			   </div> 

			   <div className="service">

			   	<span className="icon"><i className="icon-chat"></i></span>	   	           

	            <div className="service-content">

	            	 <h3>Consultancy</h3>

		            <p className="desc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
	        			</p> 
	        			
	            </div>	               

			   </div> 

	      </div> 
   	</div> 
		
	</section> 


	
	<section id="stats" className="count-up">

		<div className="row">
			<div className="col-twelve">

				<div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">

					<div className="bgrid stat">

						<div className="icon-part">
							<i className="icon-pencil-ruler"></i>
						</div>

						<h3 className="stat-count">
							15
						</h3>

						<h5 className="stat-title">
							Projects Completed
						</h5>

					</div> 		

					<div className="bgrid stat">

						<div className="icon-part">
							<i className="icon-users"></i>
						</div>

						<h3 className="stat-count">
							100%
						</h3>

						<h5 className="stat-title">
							contribution
						</h5>

					</div> 

					<div className="bgrid stat">

						<div className="icon-part">
							<i className="icon-badge"></i>
						</div>

						<h3 className="stat-count">
							20
						</h3>

						<h5 className="stat-title">
							Awards Received
						</h5>

					</div> 							

					<div className="bgrid stat">

						<div className="icon-part">
							<i className="icon-light-bulb"></i>
						</div>

						<h3 className="stat-count">
							120
						</h3>

						<h5 className="stat-title">
							Crazy Ideas
						</h5>

					</div> 

					<div className="bgrid stat">

						<div className="icon-part">
							<i className="icon-cup"></i>
						</div>

						<h3 className="stat-count">
							1500
						</h3>

						<h5 className="stat-title">
							Coffee Cups
						</h5>

					</div> 

					<div className="bgrid stat">

						<div className="icon-part">
							<i className="icon-clock"></i>
						</div>

						<h3 className="stat-count">
							720
						</h3>

						<h5 className="stat-title">
							Hours
						</h5>

					</div> 

				</div> 

			</div> 
		</div> 

	</section>

	
  
	<div id="contact">

		<div className="row section-intro">
   		<div className="col-twelve">

   			<h5>Contact</h5>
   			<h1>I'd Love To Hear From You.</h1>

   			

   		</div> 
   	</div> 

   	<div className="row contact-form">

   		<div className="col-twelve">

          
            <form name="contactForm" id="contactForm"  action="#">
      			
                  <div className="form-field">
 						   <input name="contactName" type="text" id="contactName" placeholder="Name" value="" minlength="2" required=""/>
                  </div>
                  <div className="form-field">
	      			   <input name="contactEmail" type="email" id="contactEmail" placeholder="Email" value="" required=""/>
	               </div>
                  <div className="form-field">
	     				   <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject" value=""/>
	               </div>                       
                  <div className="form-field">
	                 	<textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required=""/>
	               </div>                      
                 <div className="form-field">
                     <button className="submitform">Submit</button>
                  {/*}   <div id="submit-loader">
                        <div className="text-loader">Sending...</div>                             
       				      <div className="s-loader">
								  	<div className="bounce1"></div>
								  	<div className="bounce2"></div>
								  	<div className="bounce3"></div>
								</div>
							</div>loader*/}
                  </div> 

      		
      		</form>

           
            <div id="message-warning">            	
            </div>            
           
      		<div id="message-success">
               <i className="fa fa-check"></i>Your message was sent, thank you!
      		</div>

         </div> 
   		
   	</div> 

   	<div className="row contact-info">

   		<div className="col-four tab-full">

   			<div className="icon">
   				<i className="icon-pin"></i>
   			</div>

   			<h5>Where to find me</h5>

   			
            kolakeri village,Kodagu
			Karnataka 571214 India.

   		</div>

   		<div className="col-four tab-full collapse">

   			<div className="icon">
   				<i className="icon-mail"></i>
   			</div>

   			<h5>Email Me At</h5>

   			<p>ashigasif@gmail.com		     
			   </p>

   		</div>

   		<div className="col-four tab-full">

   			<div className="icon">
   				<i className="icon-phone"></i>
   			</div>

   			<h5>Call Me At</h5>

   			
			   	Mobile: (+91) 8296751565
			    
			   

   		</div>
   		
   	</div> 
		
	



   <footer>
     	<div className="row">

     		<div className="col-six tab-full pull-right social">

     			<ul className="footer-social">        
   <li><a href="https://www.instagram.com/_4shi.07_?igsh=dW00emRsbDRlYjdj" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
   <li><a href="https://www.linkedin.com/in/ashif-m-i-5649a32b2?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
   <li><a href="https://github.com/Ashif788/PORTFOLIO.git" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
</ul>
	      </div>

      	<div className="col-six tab-full">
	      	<div className="copyright">
		        	<span>© Copyright Kards {new Date().getFullYear()}.</span>
		        	<span>Design by Ashif M I</span>	         	
		         </div>		                  
	      	</div>

	      	<div id="go-top">
		         <a className="smoothscroll" title="Back to Top" href="#top"><i className="fa fa-long-arrow-up"></i></a>
		      </div>

      	</div> 
   </footer>  




  

</div>

    

   

  { /*} <div id="preloader"> 
    	<div id="loader"></div>
   </div> }*/}



</div>
</div>

  );
}

export default App;
