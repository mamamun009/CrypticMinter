import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Landing = lazy(() => import('../views/Landing'));
const CreateSingle = lazy(() => import('../views/CreateSingle'));
const CreateMultiple = lazy(() => import('../views/CreateMultiple'));
const Overview = lazy(() => import('../views/Overview'));
const ViewItem = lazy(() => import('../views/ViewItem'));
const EditSingle = lazy(() => import('../views/EditSingle'));
const ForSale = lazy(() => import('../views/ForSale'));
const Discover = lazy(() => import('../views/Discover'));
const Search = lazy(() => import('../views/Search'));
const Profile = lazy(() => import('../views/Profile'));
const EditProfile = lazy(() => import('../views/EditProfile'));
const Activity = lazy(() => import('../views/Activity'));
const Support = lazy(() => import('../views/Support'));
const ConnectWallet = lazy(() => import('../views/ConnectWallet'));
const Escrow = lazy(() => import('../views/Escrow'));
const EscrowCanceled = lazy(() => import('../views/EscrowCanceled'));
const EscrowConcluded = lazy(() => import('../views/EscrowConcluded'));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create-single" element={<CreateSingle />} />
        <Route path="/create-multiple" element={<CreateMultiple />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/view-item/:id" element={<ViewItem />} />
        <Route path="/view-item" element={<ViewItem />} />
        <Route path="/edit-single" element={<EditSingle />} />
        <Route path="/for-sale" element={<ForSale />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/support" element={<Support />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
        <Route path="/escrow" element={<Escrow />} />
        <Route path="/escrow-canceled" element={<EscrowCanceled />} />
        <Route path="/escrow-concluded" element={<EscrowConcluded />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
