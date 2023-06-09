pragma solidity ^0.8.0;

// Import the ERC20 interface and SafeMath library
import "./IERC20.sol";
import "./SafeMath.sol";

contract TokenTracker {
    using SafeMath for uint256;
    
    mapping(address => mapping(address => uint256)) private _balances;
    mapping(address => mapping(address => bool)) private _approval;
    
    // Function to get the balance of a specific token for a user
    function balanceOf(address token, address user) public view returns (uint256) {
        return _balances[token][user];
    }
    
    // Function to allow the contract to spend tokens on behalf of the user
    function approve(address token, uint256 amount) public {
        _approval[token][msg.sender] = true;
        IERC20(token).approve(address(this), amount);
    }
    
    // Function to transfer tokens from the user to another address
    function transfer(address token, address to, uint256 amount) public {
        require(_balances[token][msg.sender] >= amount, "Insufficient balance");
        _balances[token][msg.sender] = _balances[token][msg.sender].sub(amount);
        _balances[token][to] = _balances[token][to].add(amount);
        IERC20(token).transferFrom(msg.sender, to, amount);
    }
    
    // Function to transfer tokens from the user to another address using the allowance
    function transferFrom(address token, address from, address to, uint256 amount) public {
        require(_balances[token][from] >= amount, "Insufficient balance");
        require(_approval[token][from], "Transfer not approved");
        _balances[token][from] = _balances[token][from].sub(amount);
        _balances[token][to] = _balances[token][to].add(amount);
        IERC20(token).transferFrom(from, to, amount);
    }
}
