import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Auth
import Login from "./pages/Auth/Login";

// Home
import HomePage from "./pages/HomePage";

// Offline Fund
import AddFund from "./pages/OfflineFund/AddFund";
import AllFundReport from "./pages/OfflineFund/AllFundReport";
import UpiLoadRequest from "./pages/OfflineFund/UpiLoadRequest";
import FundRequestReport from "./pages/OfflineFund/FundRequestReport";

// Wallet Transfer
import RequestReport from "./pages/WalletTranfer/RequestReport";

// Reports
import PayingCollections from "./pages/Report/PayingCollections";
import PayoutTranfer from "./pages/Report/PayoutTranfer";

// Others
import ApiDocuments from "./pages/ApiDocuments";
import CallbackToken from "./pages/CallbackToken";
import ComplaintStatus from "./pages/ComplaintStatus";
import MyLedger from "./pages/MyLedger";
import MyProfile from "./pages/MyProfile";
import OpperatorCode from "./pages/OpperatorCode";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Auth */}
        <Route path="/login" element={<Login />} />

        {/* Offline Fund */}
        <Route path="/fund/add" element={<AddFund />} />
        <Route path="/fund/all-report" element={<AllFundReport />} />
        <Route path="/fund/qrupload-report" element={<UpiLoadRequest />} />
        <Route path="/fund/request-report" element={<FundRequestReport />} />

        {/* Wallet Transfer */}
        <Route path="/wallet/request-report" element={<RequestReport />} />

        {/* Reports */}
        <Route path="/report/payin-collections" element={<PayingCollections />} />
        <Route path="/report/payout-transfer" element={<PayoutTranfer />} />

        {/* Others */}
        <Route path="/api-documents" element={<ApiDocuments />} />
        <Route path="/callback-token" element={<CallbackToken />} />
        <Route path="/complaint-status" element={<ComplaintStatus />} />
        <Route path="/ledger" element={<MyLedger />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/operator-code" element={<OpperatorCode />} />
      </Routes>
    </Router>
  );
};

export default App;
