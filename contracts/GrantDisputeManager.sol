// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.16;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@uma/core/contracts/optimistic-oracle-v3/implementation/escalation-manager/BaseEscalationManager.sol";
import "./GrantOpenAction.sol";

contract GrantDisputeManager is BaseEscalationManager, Ownable {
    GrantOpenAction public grantOpenAction;
    mapping(bytes32 => Ids) public disputeCallerKey;
    address public grantMilestone;

    struct Ids {
        uint256 profileId;
        uint256 pubId;
    }

    error notGrantMilestoneAddress();

    modifier onlyGrantMilestone() {
        if (msg.sender != grantMilestone) {
            revert notGrantMilestoneAddress();
        }
        _;
    }

    constructor(
        address _optimisticOracleV3,
        address _grantOpenActionAddress,
        address _grantMilestoneAddress
    ) BaseEscalationManager(_optimisticOracleV3) {
        grantOpenAction = GrantOpenAction(_grantOpenActionAddress);
        grantMilestone = _grantMilestoneAddress;
    }

    function setIds(
        bytes32 assertionId,
        uint256 _profileId,
        uint256 _pubId
    ) public onlyGrantMilestone {
        disputeCallerKey[assertionId] = Ids(_profileId, _pubId);
    }

    function getAssertionPolicy(
        bytes32 assertionId
    ) public view override returns (AssertionPolicy memory) {
        return
            AssertionPolicy({
                blockAssertion: false,
                arbitrateViaEscalationManager: false,
                discardOracle: false,
                validateDisputers: true
            });
    }

    function isDisputeAllowed(
        bytes32 assertionId,
        address disputeCaller
    ) public view override returns (bool) {
        return
            grantOpenAction.getVerifiedMilestoneDisputer(
                msg.sender,
                disputeCallerKey[assertionId].profileId,
                disputeCallerKey[assertionId].pubId
            );
    }
}
