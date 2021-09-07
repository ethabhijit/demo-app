import { InlineShareButtons } from "sharethis-reactjs";

const SharePage = () => {
  return (
    <div>
      <h1>Inline Share Buttons</h1>

      <InlineShareButtons
        config={{
          alignment: "center", // alignment of buttons (left, center, right)
          color: "social", // set the color of buttons (social, white)
          enabled: true, // show/hide buttons (true, false)
          font_size: 16, // font size for the buttons
          labels: "cta", // button labels (cta, counts, null)
          language: "en", // which language to use (see LANGUAGES)
          networks: [
            // which networks to include (see SHARING NETWORKS)
            "whatsapp",
            "linkedin",
            "messenger",
            "facebook",
            "twitter",
          ],
          padding: 12, // padding within buttons (INTEGER)
          radius: 25, // the corner radius on each button (INTEGER)
          show_total: true,
          size: 40, // the size of each button (INTEGER)

          // OPTIONAL PARAMETERS
          url: "https://www.github.com",
          image: "https://bit.ly/2CMhCMC", // (defaults to og:image or twitter:image)
          description: "Twitter description", // (defaults to og:description or twitter:description)
          title: "Twitter title", // (defaults to og:title or twitter:title)
          message: "Email body text", // (only for email sharing)
          subject: "Email Subject", // (only for email sharing)
          username: "Twitter handle", // (only for twitter sharing)
        }}
      />
    </div>
  );
};

export default SharePage;
