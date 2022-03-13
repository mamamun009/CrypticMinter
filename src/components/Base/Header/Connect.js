import { Menu, Transition } from "@headlessui/react";
import { coinbaseIcon, metaMaskIcon, rainbowIcon } from "../../../assets/icons";
import Icon from "../../Utils/Icon";

const Connect = ({ connect }) => {
  return (
    <Menu as="div" className="relative">
      {({ open }) => (
        <>
          <Menu.Button>
            <div className="connect_btn">
              <p>Connect</p>
            </div>
          </Menu.Button>
          <Transition
            show={open}
            enter="transition ease-in duration-100 transform"
            enterFrom="opacity-0 scale-95 "
            enterTo="opacity-100 scale-100  "
            leave="transition ease-out duration-75 transform"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
              <Menu.Items
                static
                className="absolute w-40 p-5 mt-10 space-y-4 text-white origin-top -translate-x-1/2 rounded-lg left-1/2 bg-gradient-to-bl from-blue-dark to-blue-dark/70"
              >
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`
              flex items-center
            ${active && ""}
            `}
                      onClick={() => {
                        connect?.({
                          account: "rainbow",
                        });
                      }}
                    >
                      <Icon icon={rainbowIcon} />
                      <span className="pl-2.5">Rainbow</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`
              flex items-center
            ${active && ""}
            `}
                      onClick={() => {
                        connect?.({
                          account: "coinbase",
                        });
                      }}
                    >
                      <Icon icon={coinbaseIcon} />
                      <span className="pl-2.5">Coinbase</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`
              flex items-center
            ${active && ""}
            `}
                      onClick={() => {
                        connect?.({
                          account: "metamask",
                        });
                      }}
                    >
                      <Icon icon={metaMaskIcon} />
                      <span className="pl-2.5">Metamask</span>
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
};

export default Connect;
