import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  companyName?: string;
  phoneNumber: string;
  email: string;
  boothSize: string;
  boothType: string;
}

const VendorApplicationHostEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  companyName,
  phoneNumber,
  email,
  boothSize,
  boothType,
}) => (
  <div>
    <h1>New Vendor Application Received</h1>
    <p>
      A new vendor has submitted an application to participate in the upcoming event. Please review the following details to make a decision on whether to approve their application:
    </p>
    <ul>
      <li><strong>Name:</strong> {name}</li>
      {companyName && <li><strong>Company Name:</strong> {companyName}</li>}
      <li><strong>Phone Number:</strong> {phoneNumber}</li>
      <li><strong>Email:</strong> {email}</li>
      <li><strong>Booth Size:</strong> {boothSize}</li>
      <li><strong>Booth Type:</strong> {boothType}</li>
    </ul>
    <p>
      Please take the necessary steps to review the vendor&apos;s application and make a decision on whether to approve or reject their participation in the event. You can get to the admin portal at https://www.wpajuneteenth.com/admin/vendors
    </p>
    <p>
      If you require any additional information or need to contact the vendor directly, please use the provided contact details.
    </p>
    <p>
      Once a decision has been made, please update the vendor&apos;s application status in the system and notify them accordingly.
    </p>
    <p>
      Thank you for your attention to this matter.
    </p>
    <p>
      Best regards,<br />
      The Event Management System
    </p>
  </div>
);

export default VendorApplicationHostEmailTemplate;