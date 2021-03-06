import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import { Manager, Target, Popper } from 'react-popper';
import { ListItem, ListItemText, ListItemIcon, ListItemAvatar } from 'material-ui-next/List';

import Input from './Input';
import Menu from './Menu';

class MuiDownshift extends Component {
  static defaultProps = {
    itemToString: item => (item ? item.text : ''),
    getListItem({ getItemProps, item, index }) {
      return (
        item ? (
          <ListItem button {...getItemProps()}>
            { item.icon && <ListItemIcon>{item.icon}</ListItemIcon> }
            { item.avatar && <ListItemAvatar>{item.avatar}</ListItemAvatar> }

            <ListItemText
              primary={item.primary || item.text}
              secondary={item.secondary}
            />
          </ListItem>
        ) : index === 0 ? (
          <ListItem button disabled>
            <ListItemText primary={<span style={{ fontStyle: 'italic' }}>No items found</span>} />
          </ListItem>
        ) : (
          // TODO: should we handle this or require user to implement `getListItem` at this point (`includeFooter` or an array of null/undefined)?
          null
        )
      )
    },
    menuItemCount: 5
  };

  render() {
    const {
      items,
      itemToString,
      selectedItem,
      getRootProps,

      // Input
      getInputProps,
      loading,

      // Menu
      getListItem,
      showEmpty,
      includeFooter,
      getInfiniteLoaderProps,
      getVirtualListProps,
      menuHeight,
      menuItemCount,

      ...props
    } = this.props;

    return (
      <Manager>
        <Downshift
          itemCount={(items ? items.length : 0) + (includeFooter ? 1 : 0)} // Needed for windowing
          itemToString={itemToString}
          {...props}
        >
          {downshiftProps => {
            return (
              <div {...getRootProps && getRootProps()}>
                <Target>
                  <Input
                    getInputProps={getInputProps}
                    loading={loading}
                    downshiftProps={downshiftProps}
                  />
                </Target>

                <Menu
                  items={items}
                  getListItem={getListItem}
                  showEmpty={showEmpty}
                  includeFooter={includeFooter}
                  getInfiniteLoaderProps={getInfiniteLoaderProps}
                  getVirtualListProps={getVirtualListProps}
                  menuItemCount={menuItemCount}
                  menuHeight={menuHeight}
                  downshiftProps={downshiftProps}
                />
              </div>
            );
          }}
        </Downshift>
      </Manager>
    );
  }
}

MuiDownshift.propTypes = {
  items: PropTypes.array,
  itemToString: PropTypes.func,
  selectedItem: PropTypes.object,
  getRootProps: PropTypes.func,

  // Input
  getInputProps: PropTypes.func,
  loading: PropTypes.bool,

  // Menu
  getListItem: PropTypes.func,
  showEmpty: PropTypes.bool,
  includeFooter: PropTypes.bool,
  getInfiniteLoaderProps: PropTypes.func,
  getVirtualListProps: PropTypes.func,
  menuHeight: PropTypes.number,
  menuItemCount: PropTypes.number,
};

export default MuiDownshift;
