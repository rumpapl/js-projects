// const images = document.getElementsByTagName('img');
// let filter_imeges = [];
// for(var i = 0; i < images.length; i++) {
//     if(images[i].src.endsWith(".svg")){
//     filter_imeges.push(images[i].src);
//     }
// }

const filter_imeges = [
  "https://cdn.jotfor.ms/assets/img/campaigns/2023/salesforce/flyin/app.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/form.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/card-form.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/app.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/table.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/approval.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/pdf.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/templates/sign.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/paypal.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/slack.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/google-sheets.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/mailchimp.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/zoom.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/dropbox.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/google-calendar.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/hubspot.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/hubspot.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/zoho.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/active-campaign.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/pipedrive.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/salesforce.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/zendesk.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/insightly.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/keap.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/engagebay.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/google-drive.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/dropbox.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/onedrive.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/box.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/egnyte.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/paypal.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/square.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/paypal.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/stripe.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/authorize-net-v2.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/apple-pay-google-pay.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/paysafe.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/mollie.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/venmo.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/constant-contact.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/mailchimp.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/active-campaign.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/aweber.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/campaign-monitor.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/get-response.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/google-contacts.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/integrations/icontact.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/form-builder.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/enterprise.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/apps.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/tables.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/inbox.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/mobile-app.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/approvals.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/report-builder.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/smart-pdf-forms.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/pdf-editor.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/sign.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/salesforce.svg",
  "https://cdn01.jotfor.ms/assets/img/jfHeader/v2/products/enterprise-icon.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/animation/dark/anim-lock.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/ssl.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/encrytion.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/pci.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/gdpr.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/ccpa.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/hipaa.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/soc2.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/ferpa.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/generallegalcompliance.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/spamprotection.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/formprivacy.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/hecvat.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/safety/formencryption.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/safety/dataprivacy.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/safety/euservers.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/safety/backup.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/safety/antispam.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/service-level-agreement.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/datacenter.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/dedicated-server.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/backup.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/sso.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/practices.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/audits.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/security.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/accountsecurity.svg",
  "https://cdn.jotfor.ms/p/security/assets/img-min/measures/customizable-security-options.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/compliances/soc.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/compliances/hipaa.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/compliances/gdpr.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/compliances/pci.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/proof/g2.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/proof/crozdesk.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/proof/trustRadius.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/proof/softwareAdvice.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/proof/capterra.svg",
  "https://cdn.jotfor.ms/assets/img/jfFooter/badge/proof/getApp.svg",
];

const downloadAll = async () => {
  //   // Create and append a link
  let link = document.createElement("a");
  document.documentElement.append(link);

  filter_imeges.forEach(async (img) => {
    await fetch(img)
      .then((res) => res.blob()) // Gets the response and returns it as a blob
      .then((blob) => {
        let objectURL = URL.createObjectURL(blob);

        const image_name = img.split("/").pop().split(".")[0];
        console.log(image_name);

        // Set the download name and href
        link.setAttribute("download", `${image_name}.jpg`);
        // link.setAttribute("download", `img${1}.svg`);
        link.href = objectURL;

        // // Auto click the link
        link.click();
      });
  });
};

// const downloadAll = async () => {
//   //   // Create and append a link
//   let link = document.createElement("a");
//   document.documentElement.append(link);

//   for (let i = 0; i < filter_imeges.length; i++) {
//     await fetch(filter_imeges[i])
//       .then((res) => res.blob()) // Gets the response and returns it as a blob
//       .then((blob) => {
//         let objectURL = URL.createObjectURL(blob);

//         const image_name = filter_imeges[i].split("/").pop();
//         console.log(image_name);

//         // Set the download name and href
//         link.setAttribute("download", `${image_name}.svg`);
//         link.href = objectURL;

//         // // Auto click the link
//         link.click();
//       });
//   }
// };

downloadAll();
