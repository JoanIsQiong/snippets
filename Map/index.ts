 //替换switch case 与 if else
threeMap$.useSubscription((value) => {
    const actions = {
      [ThreeMapAction.RESET]: () => {
        SwitchStore.setRefreshMap();
      },
      [ThreeMapAction.START_ROTATE]: () => {
        controls.current!.autoRotate = true;
      },
      [ThreeMapAction.STOP_ROTATE]: () => {
        controls.current!.autoRotate = false;
      },
      [ThreeMapAction.SWITCH_NORMAL_VIEW]: () => {
        setCameraScene('MainCam');
      },
      [ThreeMapAction.SWITCH_TOP_VIEW]: () => {
        setCameraScene('TopCam');
      },
      [ThreeMapAction.SWITCH_LEFT_VIEW]: () => {
        setCameraScene('LetfCam');
      },
    };
    if (typeof actions[value] === 'function') actions[value].call(this);
  });

  const getSerial = (name: string) => {
    const getIndex = (str: string) => {
      return Number(
        VideoStore.parkMonitorList.findIndex((item) => {
          return item.device_name && str.includes(item.device_name);
        }) + 1,
      );
    };
    const serialMap = {
      [MonitorLabel.GunTypeEast]: getIndex(MonitorLabel.GunTypeEast),
      [MonitorLabel.GunTypeWest]: getIndex(MonitorLabel.GunTypeWest),
      [MonitorLabel.DomeCenter]: getIndex(MonitorLabel.DomeCenter),
    };
    return serialMap[name];
  };
