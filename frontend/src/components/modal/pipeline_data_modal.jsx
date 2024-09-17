import Modal from './modal';

const PipelineDataModal = ({ noOfEdges, noOfNodes, isDAG, onClose }) =>
  (
    <Modal closeModal={onClose} customStyles = {{wrapper: 'w-full left-0', modal: 'w-1/2'}}>
        <div className="header">
            Pipeline Data
        </div>
        <div className="content">
          <div className="row">
            <p className="heading">No. of nodes</p>
            <p>{noOfNodes}</p>
          </div>
          <div className="row">
            <p className="heading">No. of edges</p>
            <p>{noOfEdges}</p>
          </div>
          <div className="row">
            <p className="heading">Directed Acyclic Graph</p>
            <p>{isDAG ? 'Yes' : 'No'}</p>
          </div>
        </div>
    </Modal>
  )

export default PipelineDataModal;
