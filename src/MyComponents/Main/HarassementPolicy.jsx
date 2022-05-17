import React from "react";
import about_image from "./../../argus website/PNG/Video.png";
import SideBar from "./../Components/SideBar.jsx";
import AboutPageButtons from "../Components/AboutPageButtons";
import SideLine from "./../Components/SideLine";

export default function HarassementPolicy() {
  return (
    <div className="font-for-para">
      <div className="text-gray-600 body-font bg-no-repeat bg-cover bg-aboutbg bg-center">
        <div className="container mx-auto flex px-5 py-20 md:py-40 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-white">
              HARASSMENT POLICY
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-no-repeat bg-mapbg bg-contain">
        <div className="px-4 sm:px-8 lg:px-12 xl:px-0 max-w-1366 mx-auto">
          <div className="flex flex-wrap my-12">
            <div className=" md:w-1/2 lg:w-2/3 flex flex-col items-start">
              <img src={about_image} alt="About page" />
              <p className="leading-relaxed text-lg font-medium text-gray-2 mt-14 mb-6">
                The Harassment/Sexual Harassment/Discrimination policy shall
                apply to all employees, associates and Agents of Argus Security
                Services Corp.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Purpose
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security is committed to providing a working environment
                in which all of its employees and clients are treated with
                respect and dignity and have the right to work in an environment
                free from discrimination and harassment. As part of this
                commitment, this policy is aimed at preventing and resolving
                behaviour and conduct that constitutes harassment and
                discrimination as defined in the Ontario Human Rights Code
                (herein referred to as “the Code”).
              </p>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security will not tolerate any form of discrimination or
                harassment in its employment or business dealings. This includes
                but is not limited to the workplace, work related social events,
                conferences and training seminars, and refers to all forms of
                communication. This Policy provides guidelines on the reporting,
                investigation and resolution of complaints of discrimination and
                harassment. Each employee has an obligation to understand this
                Policy and how it applies to their employment at Argus Security.
                Every member of the Argus Security has the right to file a
                complaint of discrimination and/or harassment.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Definitions
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The following will assist in the identification of harassment
                and discrimination.{" "}
              </p>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Discrimination: Discrimination is unequal treatment because of
                race, ancestry, place of origin, color, ethnic origin,
                citizenship, creed, age, sex, sexual orientation, gender
                identity, gender expression, record of offences, marital status,
                family status or disability{" "}
              </p>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Harassment: Harassment is a form of discrimination defined as a
                course of vexatious comments or conduct that is known or ought
                reasonably to be known to be unwelcome. In some cases, a single
                action may be classified as harassment.
              </p>

              <ul className="text-gray-2 font-medium text-lg mb-6">
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Acts of
                  harassment can include, but are not limited to:
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Profane
                  language and inappropriate comments or gestures;{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                  Inappropriate physical conduct;{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Material
                  or offensive pictures that are displayed publicly, circulated,
                  put on someone’s work space or belongings, or on a computer or
                  fax machine
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Any
                  inappropriate electronic or cyber activity used for the
                  purpose of violence, intimidation and/ or harassment{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Creating
                  an intimidating or offensive working environment; or
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Creating
                  a degrading, humiliating, or hostile work environment{" "}
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Cyber
                  bullying, defined as any inappropriate electronic or cyber
                  activity used for the purpose of violence, intimidation and/or
                  harassment{" "}
                </li>
              </ul>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Sexual Harassment: Sexual harassment means engaging in a course
                of conduct of a gender related or sexual nature that is known or
                might reasonably be known to be unwelcome or unwanted. In some
                cases, a single action may constitute sexual harassment.
              </p>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Sexual harassment may include but is not limited to:
              </p>

              <ul className="text-gray-2 font-medium text-lg mb-6 ">
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Requests
                  for sexual favors;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Verbal or
                  physical conduct of a sexual nature;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Physical
                  conduct of a sexual nature;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Offensive
                  sexual comments, abuse or innuendo about how someone talks,
                  dresses or acts;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Jokes or
                  gestures of a sexual nature;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Material
                  or offensive pictures that are displayed publicly, circulated,
                  put on someone’s work space or belongings, or on a computer or
                  fax machine; in neither print or electronic form
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Staring
                  or leering in a sexual manner
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                  CTelephone calls or e-mail of a sexual nature.
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                  Soliciting sexual favors in exchange for a benefit
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                  Unnecessary physical contact, such as massages
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> Asking
                  for dates or personal contact when the person has already
                  indicated they are not interested
                </li>
              </ul>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Romantic or sexual relationships between a supervisor and an
                employee, intern, or volunteer whom the individual supervises,
                are prohibited because of the influence, authority or power
                imbalance in the relationship. Individuals in this situation
                should immediately disclose the relationship to their manager so
                that appropriate measures can be taken. Measures will include
                reassigning reporting responsibilities to others. Failure to
                disclose the relationship will be subject to disciplinary
                action.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Appropriate Authority: This person is responsible for overseeing
                the proper implementation, administration and enforcement of
                this Policy. At Argus Security the Appropriate Authority is HR
                department
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Complainant: A person who is or has been subjected to, or a
                person who has witnessed alleged discrimination or harassment.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Respondent – An individual who is alleged to have exhibited
                conduct that is the subject of a complaint.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Freedom from Harassment and Discrimination
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                In keeping with the Human Rights Code, Argus Security prohibits
                discrimination or any form of harassment in employment as well
                as teaching and assessment on the basis of race, ancestry, place
                of origin, color, ethnic origin, citizenship, creed, sex, sexual
                orientation, gender identity, gender expression, age, record of
                offences, marital status, family status or disability
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Every person in the Argus Security has the right to file a
                complaint pursuant to this policy. Nothing in this policy shall
                limit a person’s right to pursue legal recourse that may be
                available to that person, including filing a complaint with the
                Human Rights Tribunal, initiating a grievance according to the
                collective agreement, or commencing a legal action
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Every person who attempts to enforce his or her rights as
                identified under this policy has a right to do so without
                reprisal or threat of reprisal.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                All employees of Argus Security are responsible for maintaining
                and promoting an environment which is free of harassment and
                discrimination and for promptly reporting any incidents which
                they believe to be acts of discrimination or harassment. Argus
                Security recognizes its responsibility to deal quickly, fairly
                and expeditiously with such complaints.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                A person who knows of, or is in possession of information about
                harassment or discrimination contrary to this policy and who has
                the authority to penalize or prevent the conduct and fails to
                exercise that authority may be held accountable for failing to
                exercise that authority and may be found to have violated this
                policy. A person in authority includes any member of management
                of Argus Security, or other person who is designated legally
                responsible for the protection of persons covered by this
                Policy. Such persons in authority are encouraged to seek
                assistance and guidance from the Appropriate Authority or his or
                her manager.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Supervisory personnel who are contacted by an individual seeking
                to file a complaint about harassment or discrimination shall
                assist that person in obtaining the assistance in accordance
                with this policy and shall immediately report such matter to the
                Appropriate Authority
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Abuse of this Policy
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security supports the prompt and timely investigation and
                resolution of complaints of harassment or discrimination.
                However, Argus Security will not tolerate malicious, frivolous
                or vexatious complaints. Any person who makes a malicious,
                frivolous or vexatious or bad faith complaint may be subject to
                discipline up to and including termination of employment.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Upon a finding of harassment or discrimination, the Respondent
                employee may be subject to disciplinary action up to and
                including termination of employment
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Confidentiality
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                While individuals are encouraged to seek advice and counsel
                regarding possible violations of this policy, it is requested
                that all such information be kept confidential and not be
                disclosed except as provided by this Policy or in order to seek
                legal advice. A violation of this provision may result in
                discipline up to an including termination of employment for
                staff.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security recognizes the confidential nature of matters
                arising under this policy; however, it cannot guarantee that the
                subject matter of the complaint, the response or the
                investigation will be kept confidential. All information
                collected by Argus Security pursuant to this policy will be kept
                confidential, except when disclosure is required to investigate,
                and/or resolve or otherwise deal with such matters, or when
                disclosure of evidence is required in the course of a legal
                proceeding.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Procedure
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Any employee who feels that he or she has been the subject of
                harassment or discrimination contrary to this policy may attempt
                an informal resolution, seek advice from the Appropriate
                Authority, request informal intervention and / or file a formal
                complaint pursuant to this policy. Nothing in this policy shall
                limit a person’s right to pursue such legal recourse that may be
                available to that person, including filing a complaint with the
                Human Rights Tribunal, initiating a grievance according to the
                collective agreement, or commencing a legal action
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Complaints should be reported as soon as possible after the
                event has occurred, but in any event no more than three (3)
                months following the occurrence giving rise to the complaint.
                Parties to a complaint will be given a reasonable opportunity to
                dispute, correct or contradict all allegations, to present
                arguments and evidence in support of their position throughout
                all stages outlined in these procedures
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                A complainant may, at his or her discretion, withdraw a
                complaint at any time. However, Argus Security may, at its
                discretion, pursue the complaint in order to comply with its
                legal obligations.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Employees who believe they have been subject to or have
                witnessed harassment, discrimination or reprisal are encouraged
                to resolve the issue directly by asking the person to stop
                immediately. They should keep a record of the incident and
                resolution.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Alternatively, an employee may seek guidance from the
                Appropriate Authority or supervisor in determining their course
                of action.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                f the attempted resolution is not successful, the Complainant
                should report the complaint to his or her supervisor or the
                Appropriate Authority in accordance with the provisions herein.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Initial Assessment of Complaint
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Once the Complainant lodges a complaint with his / her
                supervisor or the Appropriate Authority, the person receiving
                the complaint shall first determine if the complaint is within
                the scope of this policy, and shall advise the Complainant in
                writing if:
              </p>

              <ul className="text-gray-2 font-medium text-lg mb-6">
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> the
                  complaint does not fall within the definitions outlined in the
                  policy, is not subject to this policy, and should be pursued
                  through an alternate mechanism;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> the
                  subject matter has been found to be frivolous, vexatious or in
                  bad faith;
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> the
                  complaint appears to be outside the jurisdiction of Argus
                  Security; or
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <span className="text-red-1 font-bold mr-2">✓</span> the
                  complaint cannot be supported or substantiated.
                </li>
              </ul>

              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                If the complaint is deemed to be within the scope of this
                policy, a discussion will take place during which the
                Complainant shall be invited to provide details of the
                complaint. During this discussion, the recipient of the
                complaint will explain all options available to the Complainan
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Informal Resolution
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Complainant may and is encouraged to seek the assistance of
                the Appropriate Authority towards an informal resolution of the
                complaint. The Appropriate Authority or designate will meet with
                each party involved and attempt to affect an informal resolution
                of the complaint.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                In the absence of an informal resolution of the complaint, the
                complainant may withdraw the complaint, or file a formal
                complaint with the Appropriate Authority.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Formal Complaint
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                If the Complainant wishes to proceed further with his or her
                complaint, the Complainant must then provide a written statement
                regarding the alleged harassment or discrimination. This written
                statement will be shared with the Respondent who shall have at
                least 5 working days to respond, in writing, to the allegation.
                The Respondent will have sufficient time to consult with his or
                her union representative or lawyer should he or she choose to do
                so.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Respondent’s statement should provide a specific response to
                each complaint. The Respondent must sign his or her statement,
                which will then be attached to the original complaint.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                If the Appropriate Authority determines that a formal
                investigation is warranted, the Appropriate Authority will
                investigate within a reasonable period after receiving the
                Respondent’s response
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Investigation
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Argus Security seeks to resolve every harassment and
                discrimination claim as expediently as possible. The Appropriate
                Authority may investigate the matter, or appoint another person
                or persons to conduct the investigation. The investigator(s)
                shall determine, on a balance of probabilities, whether a
                violation of this policy has occurred
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The investigator(s) shall meet with the Complainant, the
                Respondent and any person that may have information relevant to
                the complaint.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The investigator(s) may request and will receive documents or
                things that may be relevant to the investigation, and the
                opportunity to interview any person about matters relevant to
                the complaint.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                At the conclusion of a formal investigation(s), the investigator
                will prepare a written report which will include a statement of
                factual findings and a determination of whether, on a balance of
                probabilities standard, this policy has been violated.
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Report Handling Procedures
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Appropriate Authority shall advise the Complainant and the
                Respondent of the findings of any investigation conducted under
                this policy. In all cases, Argus Security’s Human Resources
                department shall retain the findings report. A copy of any such
                report will also be included in the appropriate personnel fil
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Upon a finding of harassment or discrimination, the Respondent
                employee may be subject to disciplinary action up to and
                including termination of employment.
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Likewise, any acts of reprisal or complaints made that are
                malicious, frivolous, vexatious or in bad faith may be subject
                to discipline up to and including termination of employment for
                employees
              </p>

              <div className="flex flex-row items-stretch w-full mt-8 mb-8">
                <SideLine />
                <h1 className="leading-tight text-3xl sm:text-4xl font-bold text-gray-3">
                  Records
                </h1>
              </div>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                The Human Resources department will keep records of all formal
                and informal resolutions and hearings except where otherwise
                stated in this Policy. Any records will be maintained in
                accordance with all applicable laws, regulations and policies
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                Associated Documentation
              </p>
              <p className="leading-relaxed text-lg font-medium text-gray-2 mb-6">
                This policy is based upon the following pieces of legislation
                and policies:
              </p>
              <ul className="text-gray-2 font-medium text-lg mb-6 ">
                <li className="flex flex-row items-start my-0.5">
                  <a
                    href="https://www.ontario.ca/laws/statute/90h19"
                    target="_blank"
                  >
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    <span className="hover:underline">
                      {" "}
                      Ontario Human Rights Code{" "}
                    </span>
                  </a>
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <a
                    href="https://www.ontario.ca/laws/statute/90o01"
                    target="_blank"
                  >
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    <span className="hover:underline">
                      Occupational Health & Safety Act
                    </span>
                  </a>
                </li>
                <li className="flex flex-row items-start my-0.5">
                  <a
                    href="https://laws-lois.justice.gc.ca/eng/acts/c-46/"
                    target="_blank"
                  >
                    <span className="text-red-1 font-bold mr-2">✓</span>{" "}
                    <span className="hover:underline">
                      Criminal Court of Canda
                    </span>
                  </a>
                </li>
              </ul>

              <AboutPageButtons />
            </div>
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
