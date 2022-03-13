import {
  profileDiscordIcon,
  profileInstaIcon,
  profileSharpWebIcon,
  profileTelegramIcon,
  profileTwitterIcon,
} from '../../assets/icons';
import Icon from '../Utils/Icon';

const LinksBox = ({ links, formik, ...props }) => {
  return (
    <div className="relative flex flex-col ">
      <label className="text-xs font-bold leading-3 text-gray-400/80 uppercase  mb-1.5">
        Links
      </label>

      <div className="rounded-lg border-[0.5px] border-black/20 mt-1.5 divide-y divide-black/20">
        <div className="flex divide-x divide-black/20 ">
          <div className="flex items-center justify-center px-3.5">
            <Icon
              icon={profileDiscordIcon}
              className="w-6 h-6 fill-gray-500/80"
            />
          </div>
          <input
            name="links.discord"
            placeholder="https://discord.gg/"
            {...formik.getFieldProps('links.discord')}
            className="w-full px-4 py-3 text-sm leading-5 text-gray-800 rounded-tr-lg placeholder:text-gray-500/80 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex divide-x divide-black/20 ">
          <div className="flex items-center justify-center px-3.5">
            <Icon
              icon={profileInstaIcon}
              className="w-6 h-6 fill-gray-500/80"
            />
          </div>
          <input
            name="links.instagram"
            placeholder="https://instagram.com/"
            {...formik.getFieldProps('links.instagram')}
            className="w-full px-4 py-3 text-sm leading-5 text-gray-800 placeholder:text-gray-500/80 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex divide-x divide-black/20 ">
          <div className="flex items-center justify-center px-3.5">
            <Icon
              icon={profileTwitterIcon}
              className="w-6 h-6 fill-gray-500/80"
            />
          </div>
          <input
            name="links.twitter"
            placeholder="https://twitter.com/"
            {...formik.getFieldProps('links.twitter')}
            className="w-full px-4 py-3 text-sm leading-5 text-gray-800 placeholder:text-gray-500/80 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex divide-x divide-black/20 ">
          <div className="flex items-center justify-center px-3.5">
            <Icon
              icon={profileTelegramIcon}
              className="w-6 h-6 fill-gray-500/80"
            />
          </div>
          <input
            name="links.telegram"
            placeholder="https://t.me/"
            {...formik.getFieldProps('links.telegram')}
            className="w-full px-4 py-3 text-sm leading-5 text-gray-800 placeholder:text-gray-500/80 focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex divide-x divide-black/20 ">
          <div className="flex items-center justify-center px-3.5">
            <Icon
              icon={profileSharpWebIcon}
              className="w-6 h-6 fill-gray-500/80"
            />
          </div>
          <input
            name="links.site"
            placeholder="https://www.example.com"
            {...formik.getFieldProps('links.site')}
            className="w-full px-4 py-3 text-sm leading-5 text-gray-800 rounded-br-lg placeholder:text-gray-500/80 focus:outline-none focus:ring-0"
          />
        </div>
      </div>
    </div>
  );
};

export default LinksBox;
