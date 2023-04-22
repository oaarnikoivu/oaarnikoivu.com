import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

export default function Social() {
  return (
    <div className="flex items-center gap-4 mt-8">
      <Link href="https://www.github.com/oaarnikoivu" target="_blank">
        <GitHubLogoIcon width={20} height={20} />
      </Link>
      <Link href="https://www.linkedin.com/in/oaarnikoivu/" target="_blank">
        <LinkedInLogoIcon width={20} height={20} />
      </Link>
      <Link href="https://www.twitter.com/oaarnikoivu" target="_blank">
        <TwitterLogoIcon width={20} height={20} />
      </Link>
      <Link href="mailto:oliveraarnikoivu@icloud.com" target="_blank">
        <EnvelopeClosedIcon width={20} height={20} />
      </Link>
    </div>
  );
}
