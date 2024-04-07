import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 items-center">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
                <h3 className="text-md font-semibold mb-4">Resource</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {platformLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h3 className="text-md font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link,index)=>(
                        <li key={index}>
                            <a className="text-neutral-300 hover:text-white" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    </footer>
  )
}
export default Footer