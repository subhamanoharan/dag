import PipelineParser from './PipelinesParser'

describe("PipelineParser", () => {
    test('when there are no nodes and edges', () => {
      const nodes = []
      const edges = []
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(0)
      expect(result.num_edges).toEqual(0)
      expect(result.is_dag).toEqual(true)
    });

    test('when there is 1 node and no edge', () => {
      const nodes = ['number-1']
      const edges = []
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(1)
      expect(result.num_edges).toEqual(0)
      expect(result.is_dag).toEqual(true)
    });

    test('when there are 2 node and 1 edge', () => {
      const nodes = [ 'customInput-1', 'number-1' ]
      const edges = [
        {
          source: 'customInput-1',
          sourceHandle: 'customInput-1-value',
          target: 'number-1',
          targetHandle: 'number-1-output'
        }
      ]
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(2)
      expect(result.num_edges).toEqual(1)
      expect(result.is_dag).toEqual(true)
    });

    test('when there is 1 node, 1 edge in a cycle', () => {
      const nodes = ['number-1']
      const edges = [
        {
          source: 'number-1',
          sourceHandle: 'number-1-output',
          target: 'number-1',
          targetHandle: 'number-1-output'
        }
      ]
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(1)
      expect(result.num_edges).toEqual(1)
      expect(result.is_dag).toEqual(false)
    });

    /*
    * A -> B -> C
    * |         ^
    * |         |
    *  ----------
    */
    test('when there are 3 node and 3 edges enclosed but not a cycle', () => {
      const nodes = [ 'A', 'B', 'C' ]
      const edges = [
        { source: 'A', target: 'B' },
        { source: 'B', target: 'C' },
        { source: 'A', target: 'C' },
      ]
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(3)
      expect(result.num_edges).toEqual(3)
      expect(result.is_dag).toEqual(true)
    });

    /*
    * A -> B -> C
    * ^         |
    * |         |
    *  ----------
    */
    test('when there are 3 node and 3 edges in a cycle', () => {
      const nodes = [ 'A', 'B', 'C' ]
      const edges = [
        { source: 'A', target: 'B' },
        { source: 'B', target: 'C' },
        { source: 'C', target: 'A' },
      ]
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(3)
      expect(result.num_edges).toEqual(3)
      expect(result.is_dag).toEqual(false)
    });
    /*
    * A -> B -> C -> D -> E
    *      ^         |
    *      |         |
    *       ----------
    */
    test('when there is a cycle in the middle', () => {
      const nodes = [ 'A', 'B', 'C', 'D', 'E' ]
      const edges = [
        { source: 'A', target: 'B' },
        { source: 'B', target: 'C' },
        { source: 'C', target: 'D' },
        { source: 'D', target: 'E' },
        { source: 'D', target: 'B' },
      ]
      const result = PipelineParser.parse(nodes, edges)
      expect(result.num_nodes).toEqual(5)
      expect(result.num_edges).toEqual(5)
      expect(result.is_dag).toEqual(false)
    });
});
