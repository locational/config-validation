import { aggregations_field_helper } from './aggregations_field_helper';
import { irs_monitor_aggregations } from './irs_monitor_aggregations';
import { irs_monitor_map_focus } from './irs_monitor_map_focus';
import { irs_plan_map_focus } from './irs_plan_map_focus'
import { irs_record_point_validations } from './irs_record_point_validations';
import { irs_tasker_map_focus } from './irs_tasker_map_focus';
import { irs_tasker_spatial_hierarchy } from './irs_tasker_spatial_hierarchy';
import { validations_fields_helper } from './validations_fields_helper';
import { Node } from '../flatten_nodes';
import { THelpers } from '../helper_functions/create_helper_objects';
import { TCustomEdgeResponse } from '../TCustomEdgeResponse';


export interface TCustomEdgeValidators {
  // we don't pass mapped nodes, we pass actual nodes 
  [k: string]: (source_node: Node, target_node: Node, helpers_object: THelpers) => TCustomEdgeResponse[]
}

export const CustomEdgeValidators: TCustomEdgeValidators = {
  aggregations_field_helper,
  irs_monitor_aggregations,
  irs_monitor_map_focus,
  irs_plan_map_focus,
  irs_record_point_validations,
  irs_tasker_map_focus,
  irs_tasker_spatial_hierarchy,
  validations_fields_helper
};
