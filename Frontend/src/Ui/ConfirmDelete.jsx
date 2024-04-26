function ConfirmDelete({resourceName, onClose, onConfirm, disabled}) {
    return ( <div>
        <p>Are you sure you want delete {resourceName}</p>
        <div className="flex justify-between">
            <button onClick={onClose} disabled={disabled} className="btn--primary">Close</button>
            <button onClick={onConfirm} disabled={disabled} className="btn--danger">Confirm</button>
        </div>
    </div> );
}

export default ConfirmDelete;