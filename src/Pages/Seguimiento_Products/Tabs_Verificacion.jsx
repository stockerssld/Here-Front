import React from 'react'
import { Tabs } from 'antd';

import { makeStyles } from '@material-ui/core/styles';
import {Column} from 'rbx'

const { TabPane } = Tabs;
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



export default function Tabs_Verificacion() {
  const classes = useStyles();
  return (
    <>

      <Tabs defaultActiveKey="1" >
        <TabPane tab="Datos Personales" key="1">
          <div className={classes.root}>
                Aqui estaran los datos personales
          </div>
        </TabPane>
        <TabPane tab="Datos de ubicación" key="2">
          <div className={classes.root}>
                Aqui se daran datos de la ubicacion para el envio de nuestros productos
          </div>
        </TabPane>
        <TabPane tab="Tipo de Pago" key="3">
          <div className={classes.root}>
          <div className="container">
                 <Column.Group breakpoint="mobile">
            <Column size="one-third">
            <br/>                        <br/>
                		<img src="https://scontent.fmex10-2.fna.fbcdn.net/v/t1.15752-9/53343611_1660151477616925_7435987200094765056_n.png?_nc_cat=100&_nc_ht=scontent.fmex10-2.fna&oh=fbb9979cc389a8a95c455881d5db4f4a&oe=5D8EA771"/>
                        <br/>
										<p>Important: You will be redirected to PayPal's website to securely complete your payment.</p>
										
                                        </Column>
                                        <Column>
                                        <form action="#" method="post" class="creditly-card-form-2 shopf-sear-headinfo_form">
											<section class="creditly-wrapper payf_wrapper">
												<div class="credit-card-wrapper">
													<div class="first-row form-group">
														<div class="controls">
															<label class="control-label">Card Holder </label>
															<input class="billing-address-name form-control" type="text" name="name" placeholder="John Smith"/>
														</div>
														<div class="paymntf_card_number_grids my-2">
															<div class="fpay_card_number_grid_left">
																<div class="controls">
																	<label class="control-label">Card Number</label>
																	<input class="number credit-card-number-2 form-control" type="text" name="number" inputmode="numeric" autocomplete="cc-number"
																	    autocompletetype="cc-number" x-autocompletetype="cc-number" placeholder="•••• •••• •••• ••••"/>
																</div>
															</div>
															<div class="fpay_card_number_grid_right mt-2">
																<div class="controls">
																	<label class="control-label">CVV</label>
																	<input class="security-code-2 form-control" inputmode="numeric" type="text" name="security-code" placeholder="•••"/>
																</div>
															</div>
															<div class="clear"> </div>
														</div>
														<div class="controls">
															<label class="control-label">Valid Thru</label>
															<input class="expiration-month-and-year-2 form-control" type="text" name="expiration-month-and-year" placeholder="MM / YY"/>
														</div>
													</div>
                                                    <center>
													<input class="submit btn btn-primary" type="submit" value="Proceed Payment"/>
                                                    </center>
												</div>
											</section>
										</form>
                                        </Column>

                                        </Column.Group>
                                        </div>	
          </div>
        </TabPane>
      </Tabs>
    </>
  )
}