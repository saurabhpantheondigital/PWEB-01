import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col items-center overflow-x-hidden">
      <div className="bg-[#212121] w-[90%] sm:w-[80%] h-full sm:mt-24 mt-32 flex flex-col items-center rounded-4xl sm:p-8 p-4">
        <h1 className="font-geometric font-bold text-white text-xl sm:text-5xl sm:mt-12 mt-4">
          Terms of Use
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl  mt-4 sm:mt-12">
          Last Updated: April 06, 2025
        </p>

        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl  mt-4 sm:mt-12">
          These Terms and Conditions (“Terms”) govern the use of the Zfour HR
          platform (“Software” or “Zfour HR”), a web-based Human Resource
          Management System (HRMS) developed and managed by Zfour Technologies.
          These Terms apply to all customers and users who access or use our
          services. By accessing or using Zfour HR, you (“Customer”, “you”, or
          “your”) agree to be bound by these Terms.
        </p>

        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl  mt-4 sm:mt-12">
          These Terms are in addition to any other service agreement (“Customer
          Agreement”) executed between you and Zfour HR. Capitalized terms not
          defined herein shall have the meaning ascribed in the Customer
          Agreement.
        </p>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          1. LICENSE CONDITIONS
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl  mt-2">
          Zfour HR grants the Customer a limited, non-exclusive,
          non-transferable, revocable license to access and use the Software,
          subject to the following conditions:
        </p>

        <ul className="ml-24 list-disc w-full">
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            The Software may only be accessed and used by the Customer’s
            employees and authorized personnel.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            The number of users must not exceed the licensed limit specified in
            the Customer Agreement.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            The Customer shall not sub-license, distribute, or commercially
            exploit the Software.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            The Software may not be used to provide services to third parties
            without prior written consent from Zfour HR.
          </li>
        </ul>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          2. MAINTENANCE AND SUPPORT
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          Remote Support: Zfour HR will provide Maintenance and Support Services
          remotely (via helpdesk, email, or phone) as outlined in Schedule.{" "}
          <br />
          Helpdesk Access: Customers may submit support queries via the
          helpdesk. Support will be provided only for valid requests related to
          system issues, updates, or maintenance.
          <br />
          On-Site Support: If on-site support or training is required,
          additional charges will apply. These charges include travel and
          time-based service fees.
          <br />
          Planned Downtime: Zfour HR will provide at least 10 business days’
          notice prior to scheduled maintenance that could impact service
          availability.
          <br />
          Service Suspension: Support services may be suspended if payment is
          overdue for more than 45 days, with at least 30 days’ prior notice.
        </p>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          3. DATA PROTECTION
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          Customer Responsibilities:
          <br />
          The Customer confirms that they have the right to share any employee
          or business data (“Customer Data”) uploaded to the system. The
          processing of such data must comply with all applicable data
          protection laws. Zfour HR Responsibilities:
          <br /> Zfour HR shall:
          <br />
        </p>

        <ul className="ml-24 list-disc w-full">
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Process Customer Data only on documented instructions from the
            Customer.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Implement appropriate technical and organizational measures to
            protect data against unauthorized access, loss, or corruption.
          </li>
        </ul>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          4. SOFTWARE WARRANTY & LIMITATIONS
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          The Customer acknowledges that:
        </p>
        <ul className="ml-24 list-disc w-full">
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Complex software is never entirely error-free. While Zfour HR aims
            to maintain optimal performance, no warranty is made that the
            Software will be completely error-free.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            The Software is not guaranteed to be compatible with all external
            systems or software unless specified in the compatibility
            documentation.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Zfour HR does not provide legal, tax, or financial advice.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            The platform is provided “as-is,” and any issues will be reasonably
            supported in accordance with these Terms.
          </li>
        </ul>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          5. REFUND & CANCELLATION POLICY
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          We do not offer refunds for any subscriptions. Customers may cancel
          their subscription by providing one (1) month’s advance written
          notice. During this period, data and access will remain active unless
          otherwise agreed.
        </p>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          6. MAINTENANCE & SUPPORT SLA
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          (Schedule 1)
        </p>

        <h4 className="w-full font-avenir-bold text-white text-md sm:text-xl mt-3 sm:mt-6">
          PART A – MAINTENANCE SLA
        </h4>
        <ul className="ml-24 list-disc w-full">
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Updates: Zfour HR may release system updates periodically without
            prior notice.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Upgrades: Major software upgrades will be communicated in advance.
            While we may consider Customer feedback, upgrades are based on
            internal development cycles and priorities.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Zfour HR will release at least one upgrade annually.
          </li>
        </ul>

        <h4 className="w-full font-avenir-bold text-white text-md sm:text-xl mt-3 sm:mt-6">
          PART B – SUPPORT SLA
        </h4>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          Touchpoints for Customer Support:
        </p>
        <ul className="ml-24 list-disc w-full">
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            24/7 access to our web-based support system
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Phone and email support during business hours (Monday to Friday)
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Issue logging and ticketing system
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Notification of bug fixes, patches, and general updates
          </li>
        </ul>

        <h4 className="w-full font-avenir-bold text-white text-md sm:text-xl mt-3 sm:mt-6">
          Severity Levels:
        </h4>
        <ul className="ml-24 list-disc w-full">
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            High (P1): Critical business operations are affected (e.g., data
            loss, system crash).
            <br />
            Response Time: Immediate effort during business hours.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Medium (P2): Partial loss of functionality; workaround may exist.
            <br></br>Response Time: Within 24 hours.
          </li>
          <li className="font-avenir-regular text-white text-sm sm:text-xl  mt-2">
            Low (P3): Minor issues or general queries.
            <br /> Response Time: Within 48–72 hours.
          </li>
        </ul>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          7. GOVERNING LAW
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          These Terms shall be governed by and construed in accordance with the
          laws of [Insert Jurisdiction, e.g., India]. Any disputes shall be
          subject to the exclusive jurisdiction of the courts of Delhi.
        </p>

        <h1 className="w-full font-avenir-bold text-white text-lg sm:text-2xl mt-4 sm:mt-12">
          8. CONTACT US
        </h1>
        <p className=" w-full font-avenir-regular text-white text-sm sm:text-xl mt-2">
          If you have any questions about these Terms, please reach out to us
          at:
        </p>

        {/* mail */}
        <div className="w-full flex gap-8 items-center mt-4">
          <Image
            className=""
            src="/mail2.png"
            alt="mail"
            width="20"
            height="20"
          />
          <Link href="mailto:info@zfourhr.in">
            <span className="text-white font-avenir-regular text-xl">
              info@zfourhr.in
            </span>
          </Link>

          <p className="text-white text-4xl">I</p>

          <Link href="mailto:sales@zfour.in">
            <span className="text-white font-avenir-regular text-xl">
              sales@zfour.in
            </span>
          </Link>

          <p className="text-white text-4xl">I</p>

          <Link href="mailto:Feedback@zfour.in">
            <span className="text-white font-avenir-regular text-xl">
              Feedback@zfour.in
            </span>
          </Link>
        </div>

        {/* website */}
        <div className="w-full flex gap-8 items-center mt-4">
          <Image
            className=""
            src="/globe.png"
            alt="mail"
            width="20"
            height="20"
          />

          <Link href="https://www.zfour.in" target="_blank">
            <span className="text-white font-avenir-regular text-xl">
              https://www.zfour.in
            </span>
          </Link>
        </div>

        {/* contact */}
        <div className="w-full flex gap-8 items-center mt-4">
          <Link href="tel:+91 93547 61565">
            <span className="text-white font-avenir-regular text-xl">
              +91 93547 61565
            </span>
          </Link>

          <p className="text-white text-4xl">I</p>

          <Link href="tel:+91 93547 61565">
            <span className="text-white font-avenir-regular text-xl">
              +91 93547 61565
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
