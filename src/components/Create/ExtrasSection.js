import Title from './Title';
import TextField from './TextField';
import SwitchDisclosure from './SwitchDisclosure';
import SelectField from './SelectField';
import { Switch } from '@headlessui/react';
import Icon from '../Utils/Icon';
import { cubeIcon } from '../../assets/icons';

const ExtrasSection = ({ formik, index, edit }) => {
  return (
    <div>
      <Title number={index} title="Extras" />

      <div className="space-y-4 mt-11">
        <SwitchDisclosure
          title="Unlock Once Purchased"
          description="Include unlockable content that can only be revealed by the owner of the item."
          open={formik.values.unlockable}
          setOpen={(value) => {
            formik.setFieldValue('unlockable', value);
          }}
          disabled={edit}
        >
          <TextField
            name="unlockableContent"
            label="Link"
            placeholder='e. g. "http://www.unlockable.com..'
            {...formik.getFieldProps('unlockableContent')}
            error={
              formik.touched.unlockableContent &&
              formik.errors.unlockableContent
            }
            disabled={edit}
          />
        </SwitchDisclosure>

        <SwitchDisclosure
          title="Is this artwork a collaboration?"
          description="Partner with your favorite artists and have your cut automatically delivered to you upon sale"
          open={formik.values.isCollaboration}
          setOpen={(value) => {
            formik.setFieldValue('isCollaboration', value);
          }}
        >
          <div className="flex flex-col w-full gap-6 mt-6 lg:flex-row">
            <div className="flex-1 w-full">
              <TextField
                name="collaborationPartner.walletAddress"
                label="Wallet Address"
                placeholder='e. g. "0x1746f86011ACa..'
                {...formik.getFieldProps('collaborationPartner.walletAddress')}
                error={
                  formik.touched.collaborationPartner?.walletAddress &&
                  formik.errors.collaborationPartner?.walletAddress
                }
              />
            </div>
            <div className="min-w-[130px]">
              <SelectField
                name="collaborationPartner.percentage"
                label="Percentage"
                {...formik.getFieldProps('collaborationPartner.percentage')}
                error={
                  formik.touched.collaborationPartner?.percentage &&
                  formik.errors.collaborationPartner?.percentage
                }
                options={
                  // 5 to 100 in 5 increments
                  [...Array(21).keys()].map((i) => ({
                    value: i * 5,
                    label: `${i * 5}%`,
                  }))
                }
              />{' '}
            </div>
          </div>
        </SwitchDisclosure>

        <div className="flex items-center w-full bg-white gap-25">
          <div className="flex-1">
            <h5 className="text-sm leading-6 text-gray-900 font-madeOuterSans">
              This is not a physical product
            </h5>
            <p className="mt-1 text-xs leading-5 text-gray-500 ">
              Check this option if you’re selling a digital collectible only
            </p>
          </div>
          <div className="flex-shrink-0">
            <Switch
              checked={formik.values.isPhysical}
              onChange={(value) => {
                formik.setFieldValue('isPhysical', value);
              }}
              className={`${
                formik.values.isPhysical ? 'bg-blue-dark' : 'bg-gray-500/70'
              } relative inline-flex items-center h-6 rounded-[32px] w-12
              ${edit ? 'opacity-75 ' : ''}
                `}
              disabled={edit}
            >
              <span className="sr-only">This is not a physical product</span>
              <Icon
                icon={cubeIcon}
                className={`${
                  formik.values.isPhysical ? '' : 'opacity-0 scale-50'
                } transition ease-in-out duration-200 absolute left-2 w-3.5 h-4 fill-gray-100 top-1 `}
              />
              <span
                className={`${
                  formik.values.isPhysical ? 'translate-x-7' : 'translate-x-1'
                } transition ease-in-out duration-200 inline-block w-4 h-4 bg-white rounded-full`}
              />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtrasSection;
